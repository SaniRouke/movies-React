import React, { useState, useEffect } from 'react';
import { Layout, Tabs, Spin } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import moviesApi from '../services/moviesApi';
import Search from './Search';
import MoviesList from './MoviesList';
import MovieItem from './MovieItem';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [sessionID, setSessionID] = useState(null);
  const [sort, setSort] = useState('search');
  const [data, setData] = useState([]);
  const [stateError, setError] = useState(null);
  const [currentPage, setPage] = useState(1);

  function fetchData(query) {
    setLoading(true);
    Promise.resolve()
      .then(() => {
        return moviesApi.getSearchList(sessionID, query, currentPage);
      })
      .then(({ error, results }) => {
        setLoading(false);
        setData(results);
        setError(error);
        return results;
      });
  }

  useEffect(() => {
    console.log('useEffect init');
    Promise.resolve()
      .then(() => {
        return moviesApi.createGuestSession();
      })
      .then((session) => {
        setSessionID(session.guest_session_id);
      });
  }, []);

  useEffect(() => {
    console.log('useEffect Page');
    fetchData();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [currentPage, sort]);

  const { Content } = Layout;
  const { TabPane } = Tabs;
  const list = data.map((movie) => (
    <li className="li-MovieItem" key={movie.id}>
      <MovieItem className="MovieItem" data={movie} />
    </li>
  ));

  console.log('render');
  return (
    <div className="App">
      <Layout className="Layout">
        <Content className="Content">
          <Tabs className="Tabs" size="large" centered onTabClick={setSort}>
            <TabPane tab="Search" key="search" />
            <TabPane tab="Rated" key="rated" />
          </Tabs>
          <Search fetchData={fetchData} disabled={sort === 'rated'} />
          <Spin spinning={loading} size="large">
            <MoviesList className="MoviesList" error={stateError} currentPage={currentPage} setPage={setPage}>
              {list}
            </MoviesList>
          </Spin>
        </Content>
      </Layout>
    </div>
  );
}
