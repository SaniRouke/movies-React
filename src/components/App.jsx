import React, { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import moviesApi from "../services/moviesApi";
import { Layout, Tabs, Spin } from "antd";
import Search from "./Search";
import MoviesList from "./MoviesList";
import MovieItem from "./MovieItem";

function App() {
  const [loading, setLoading] = useState(true);
  const [sessionID, setSessionID] = useState(null);
  const [sort, setSort] = useState("search");
  const [data, setData] = useState([]);
  const [currentPage, setPage] = useState(1);

  useEffect(() => {
    console.log("useEffect init");
    Promise.resolve()
      .then(() => {
        return moviesApi.createGuestSession();
      })
      .then((session) => {
        setSessionID(session.guest_session_id);
        return;
      });
  }, []);

  useEffect(() => {
    console.log("useEffect Page");
    loadData();
    window.scrollTo(0, 0);
  }, [currentPage, sort]);

  function loadData(query) {
    setLoading(true);
    Promise.resolve()
      .then(() => {
        return moviesApi.getSearchList(sessionID, query, currentPage);
      })
      .then(({ results }) => {
        setLoading(false);
        setData(results);
        return results;
      });
  }

  const { Content } = Layout;
  const { TabPane } = Tabs;
  console.log("render");
  return (
    <div className="App">
      <Layout className="Layout">
        <Content className="Content">
          <Tabs
            className="Tabs"
            size="large"
            centered={true}
            onTabClick={(key) => setSort(key)}
          >
            <TabPane tab="Search" key="search" />
            <TabPane tab="Rated" key="rated" />
          </Tabs>
          <Search loadData={loadData} disabled={sort === "rated"} />
          <Spin spinning={loading} size="large">
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
          </Spin>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
