import React, { useContext } from 'react';

import Movies from '../components/Movies';
import { moviesContext } from './../context/MoviesContext';

import Header from './../components/Header';

export default function Home() {
  const { movies } = useContext(moviesContext);
  return (
    <>
      <Header />
      <div className="page">
        <Movies movies={movies} />
      </div>
    </>
  );
}
