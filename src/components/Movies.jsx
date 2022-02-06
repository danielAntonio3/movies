import React from 'react';
import Movie from './Movie';

export default function Movies({ movies }) {
  return (
    <section className="movies">
      {/* Bloque contenedor*/}
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </section>
  );
}
