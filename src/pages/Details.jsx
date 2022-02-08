import React, { useContext, useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import Movies from '../components/Movies';
import { moviesContext } from './../context/MoviesContext';

export default function Details() {
  const { id } = useParams();
  const { movies, reviews, setReviews } = useContext(moviesContext);
  const comentario = useRef();

  const movie = movies.filter((movie) => movie.id === id);

  // Por si la ruta no existe
  if (movie.length === 0) {
    return <Navigate to="/NotFound" />;
  }

  // Función para agregar un comentario
  const addReview = () => {
    let valueComment = comentario.current.value;
    console.log(valueComment);
    setReviews([...reviews, { id: movie.id, valueComment }]);
  };

  return (
    <div>
      {/* <p>Details {id}</p> */}
      <Movies movies={movie} />
      <div>
        <input ref={comentario} type="text" placeholder="comentario" />
        <button onClick={addReview}>Agregar comentario</button>
      </div>
    </div>
  );
}
