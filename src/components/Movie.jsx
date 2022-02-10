import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie({ movie }) {
  return (
    <article className="movie">
      <Link to={`/details/${movie.id}`}>
        <h2 className="movie__title">{movie.title}</h2>
      </Link>
      <div className="movie__starts">
        {movie.starts / movie.numberOfReviews}
      </div>
      <img className="movie__img" src={movie.img} alt={movie.title} />
    </article>
  );
}
