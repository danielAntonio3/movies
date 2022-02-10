import React, { useContext, useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import Movies from '../components/Movies';
import { moviesContext } from './../context/MoviesContext';

export default function Details() {
  const { id } = useParams();

  const { movies, reviews, setReviews } = useContext(moviesContext);

  const comentario = useRef();
  const rating = useRef();

  const movie = movies.filter((movie) => movie.id === id)[0];

  // Por si la ruta no existe
  if (!movie) {
    return <Navigate to="/NotFound" />;
  }

  // Función para agregar un comentario
  const addReview = () => {
    let valueComment = comentario.current.value;
    setReviews([
      ...reviews,
      { id: reviews.length, idMovie: movie.id, comment: valueComment },
    ]);
  };

  return (
    <>
      <Movies movies={[movie]}></Movies>
      <div>
        <input ref={comentario} type="text" placeholder="comentario" />
        <select ref={rating}></select>
        <button onClick={addReview}>Agregar comentario</button>
      </div>
      {reviews.map((review, index) => {
        return review.idMovie === id ? (
          <p key={index}>{review.comment}</p>
        ) : undefined;
      })}
    </>
  );
}
