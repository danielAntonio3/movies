import React, { useContext, useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import Movies from '../components/Movies';
import { moviesContext } from './../context/MoviesContext';

export default function Details() {
  const { id } = useParams();

  const { movies, addReview, reviews } = useContext(moviesContext);

  const comentario = useRef();
  const rating = useRef();

  const movie = movies.filter((movie) => movie._id === id)[0];

  // Por si la ruta no existe
  if (!movie) {
    return <Navigate to="/NotFound" />;
  }

  // Función para agregar un comentario
  const addReviews = () => {
    let comment = comentario.current.value;
    let starts = rating.current.value;
    addReview(movie, starts, comment);
  };

  return (
    <>
      <Movies movies={[movie]}></Movies>
      <div>
        <input ref={comentario} type="text" placeholder="comentario" />
        <select ref={rating}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button onClick={addReviews}>Agregar comentario</button>
      </div>
      {reviews.map((review) => {
        return review.idMovie === id ? (
          <p key={review.id}>{review.comment}</p>
        ) : undefined;
      })}
    </>
  );
}
