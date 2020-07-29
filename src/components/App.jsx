import React, { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
// import MoviesApi from "../services/moviesApi";
import { Layout } from "antd";
import MoviesList from "./MoviesList";
import MovieItem from "./MovieItem";

function App({ apiKey }) {
  const [sessionID, setSessionID] = useState("");
  const [data, setData] = useState([]);

  // const moviesApi = new MoviesApi(apiKey);

  async function createGuestSession() {
    await fetch(
      "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=e3cafce94e3a863833765608b4d85428"
    )
      .then((res) => {
        console.log("Session", res);
        return res.json();
      })
      .then((json) => {
        console.log("SessionJson", json);
        setSessionID(json.guest_session_id);
      });
  }
  async function fetchData() {
    await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=e3cafce94e3a863833765608b4d85428&query=return&session_id=7b3fa3044b6cb2c0f88b0b65fc435507"
    )
      .then((res) => {
        console.log("Data", res);
        return res.json();
      })
      .then((json) => {
        console.log("DataJson", json);
        setData(json.results);
      });
  }

  useEffect(() => {
    async function asyncFunc() {
      await createGuestSession();
      fetchData();
    }
    asyncFunc();
  }, []);

  console.log("SessionID", sessionID);
  console.log("Data", data);
  const { Content } = Layout;
  return (
    <div className="App">
      {/* {token} */}
      <Layout className="Layout">
        {/* <Header className="Header">Header</Header> */}
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
