import React, { useState, useEffect, useCallback } from 'react';
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
  const genres = useGenres();
  const [searchValue, setSearchValue] = useState('');

  const fetchData = (session, query, pageNumber, sortType = 'search') => {
    setLoading(true);
    setSearchValue(query);
    Promise.resolve(
      sortType === 'rated'
        ? moviesApi.getRatedListGuestSession(session)
        : moviesApi.getSearchList(session, query, pageNumber)
    ).then(({ error, results }) => {
      setLoading(false);
      setData(results);
      setError(error);
      return results;
    });
  };

  const cbFetchData = useCallback(() => fetchData(sessionID, searchValue, currentPage, sort), [
    sessionID,
    searchValue,
    currentPage,
    sort,
  ]);

  useEffect(() => {
    // console.log('useEffect init');
    Promise.resolve(moviesApi.createGuestSession()).then((session) => {
      setSessionID(session.guest_session_id);
    });
  }, []);

  useEffect(() => {
    // console.log('useEffect Page');
    cbFetchData();
    window.scrollTo(0, 0);
  }, [currentPage, sort, cbFetchData]);

  useEffect(() => {
    // обновляет ещё раз страницу, в итоге 3 запроса за раз, заметно
    // console.log('useEffect Change Value');
    setPage(1);
  }, [searchValue]);

  const { Content } = Layout;
  const { TabPane } = Tabs;

  const list = data.map((movie) => (
    <li className="li-MovieItem" key={movie.id}>
      <MovieItem className="MovieItem" data={movie} sessionID={sessionID} genres={genres} />
    </li>
  ));

  return (
    <div className="App">
      <Layout className="Layout">
        <Content className="Content">
          <Tabs className="Tabs" size="large" centered onTabClick={setSort}>
            <TabPane tab="Search" key="search" />
            <TabPane tab="Rated" key="rated" />
          </Tabs>
          <Search
            fetchData={(query) => {
              return fetchData(sessionID, query, currentPage);
            }}
            disabled={sort === 'rated'}
          />
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

function useGenres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // console.log('useGENRES');
    Promise.resolve(moviesApi.getGenres()).then((genresList) => {
      setGenres(genresList.genres);
    });
  }, []);

  let genresNames = [];
  for (const item in genres) {
    if (Object.prototype.hasOwnProperty.call(genres, item)) {
      const [...rest] = genresNames;
      genresNames = [...rest, genres[item]];
    }
  }
  const genresList = genresNames.reduce((acc, ...item) => {
    return { ...acc, [item[0].id]: item[0].name };
  }, {});

  return genresList;
}
