import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie({ movie }) {
  const numStart = movie.starts / movie.numberOfReviews;
  const numbers = ['1', '2', '3', '4', '5'];
  const stars = [];

  numbers.map((number) => {
    if (number <= numStart) {
      stars.push(
        <li key={number}>
          <span>&#9733;</span>
        </li>
      );
    }
  });

  return (
    <article className="movie">
      <img className="movie__img" src={movie.img} alt={movie.title} />
      <Link to={`/details/${movie._id}`}>
        <h2 className="movie__title">{movie.title}</h2>
      </Link>
      <div className="movie__starts">
        <ul id="ulStars">{isNaN(numStart) ? 0 : stars}</ul>
      </div>
      {/* <p className="movie__description">{movie.description}</p> */}
    </article>
  );
}
