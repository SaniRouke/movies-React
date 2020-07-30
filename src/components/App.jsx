import React, { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import moviesApi from "../services/moviesApi";
import { Layout } from "antd";
import Search from "./Search";
import MoviesList from "./MoviesList";
import MovieItem from "./MovieItem";

function App() {
  const [sessionID, setSessionID] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setStatePage] = useState(1);

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
  }, [currentPage]);

  async function loadData(query) {
    const list = await moviesApi.getSearchList(sessionID, query, currentPage);
    setData(list.results);
  }

  function setPage(page) {
    setStatePage(page);
  }

  const { Content } = Layout;
  console.log("render");
  return (
    <div className="App">
      <Layout className="Layout">
        <Content className="Content">
          <Search loadData={loadData} />
          <MoviesList
            className="MoviesList"
            currentPage={currentPage}
            setPage={setPage}
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
