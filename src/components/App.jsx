import React, { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import moviesApi from "../services/moviesApi";
import { Layout } from "antd";
import MoviesList from "./MoviesList";
import MovieItem from "./MovieItem";

function App() {
  const [sessionID, setSessionID] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("useEffect1");
    async function asyncFunc() {
      const session = await moviesApi.createGuestSession();
      setSessionID(session.guest_session_id);
      const list = await moviesApi.getSearchList(sessionID);
      setData(list.results);
    }
    asyncFunc();
  }, []);

  const { Content } = Layout;
  console.log(data);
  return (
    <div className="App">
      <Layout className="Layout">
        <Content className="Content">
          <MoviesList className="MoviesList">
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
