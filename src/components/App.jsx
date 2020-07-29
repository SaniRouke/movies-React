import React, { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import MoviesApi from "../services/moviesApi";
import { Layout } from "antd";
import MoviesList from "./MoviesList";
import MovieItem from "./MovieItem";

function App({ apiKey }) {
  const [sessionID, setSessionID] = useState("");
  const [data, setData] = useState([]);

  const moviesApi = new MoviesApi(apiKey);

  useEffect(() => {
    console.log("useEffect");
    async function asyncFunc() {
      await moviesApi
        .createGuestSession()
        .then((res) => setSessionID(res.guest_session_id));
      moviesApi.getSearchList(sessionID).then((res) => setData(res.results));
    }
    asyncFunc();
  }, []);

  const { Content } = Layout;
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
