import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie({ movie }) {
  const numStart = movie.starts / movie.numberOfReviews;
  return (
    <article className="movie">
      <img className="movie__img" src={movie.img} alt={movie.title} />
      <Link to={`/details/${movie.id}`}>
        <h2 className="movie__title">{movie.title}</h2>
      </Link>
      <div className="movie__starts">
        <ul id="ulStars">
          {numStart}
          <li>
            <span>&#9733;</span>
          </li>
          <li>
            <span>&#9733;</span>
          </li>
          <li>
            <span>&#9733;</span>
          </li>
          <li>
            <span>&#9733;</span>
          </li>
          <li>
            <span>&#9733;</span>
          </li>
        </ul>
      </div>
      <p className="movie__description">{movie.description}</p>
    </article>
  );
}
