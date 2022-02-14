import React, { useContext } from 'react';

import Header from '../components/Header';
import Movies from '../components/Movies';
import { moviesContext } from './../context/MoviesContext';

export default function Home() {
  const { movies } = useContext(moviesContext);
  return (
    <div className="page">
      <Header />
      <Movies movies={movies} />
    </div>
  );
}
