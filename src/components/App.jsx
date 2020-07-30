import React, { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import moviesApi from "../services/moviesApi";
import { Layout, Tabs } from "antd";
import Search from "./Search";
import MoviesList from "./MoviesList";
import MovieItem from "./MovieItem";

function App() {
  const [sessionID, setSessionID] = useState("");
  const [sort, setSort] = useState("search");
  const [data, setData] = useState([]);
  const [currentPage, setPage] = useState(1);

  useEffect(() => {
    console.log("useEffect init");
    async function asyncFunc() {
      const session = await moviesApi.createGuestSession();
      await setSessionID(session.guest_session_id);
    }
    asyncFunc();
  }, []);

  useEffect(() => {
    console.log("useEffect Page");
    loadData();
  }, [currentPage, sort]);

  async function loadData(query) {
    const list = await moviesApi.getSearchList(sessionID, query, currentPage);
    setData(list.results);
  }

  const { Content } = Layout;
  const { TabPane } = Tabs;
  console.log("render");
  return (
    <div className="App">
      <Layout className="Layout">
        <Content className="Content">
          <Tabs size="large" centered={true} onTabClick={(key) => setSort(key)}>
            <TabPane tab="Search" key="search" />
            <TabPane tab="Rated" key="rated" />
          </Tabs>
          <Search loadData={loadData} disabled={sort === "rated"} />
          <MoviesList
            className="MoviesList"
            currentPage={currentPage}
            setPage={(page) => setPage(page)}
          >
            {data.map((movie) => (
              <li className="li-MovieItem" key={movie.id}>
                <MovieItem className="MovieItem" data={movie} />
              </li>
            ))}
          </MoviesList>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
