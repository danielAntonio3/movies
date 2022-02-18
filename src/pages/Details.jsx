import React, { useContext, useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Header from '../components/Header';

import Movies from '../components/Movies';
import { moviesContext } from './../context/MoviesContext';

export default function Details() {
  const { id } = useParams();

  const { movies, addReview, reviews, loading } = useContext(moviesContext);

  const comentario = useRef();

  const movie = movies.filter((movie) => movie._id === id)[0];

  // Por si la ruta no existe
  if (!movie && !loading) {
    return <Navigate to="/NotFound" />;
  }

  // Función para agregar un comentario
  const addReviews = () => {
    let comment = comentario.current.value;
    let starts = localStorage.getItem('rating');
    if (!starts || comment.length === 0) {
      alert('Por favor selecciona una estrella y agrega comentario');
      return;
    }
    addReview(movie, starts, comment);
    localStorage.setItem('rating', '');
    comentario.current.value = '';
  };

  const estrella = (e) => {
    // console.log(e.target.id);
    localStorage.setItem('rating', e.target.id);
  };

  // return loading ? (
  //   <p>loading....</p>
  // ) : (
  return (
    <>
      <Header />
      <Movies movies={[movie]}></Movies>
      <div className="reviews">
        <label>Comentario</label>
        <textarea
          ref={comentario}
          placeholder="comentario"
          className="reviews__area"
        ></textarea>

        <span className="calf" id="1" onClick={estrella}>
          &#9733;
        </span>
        <span className="calf" id="2" onClick={estrella}>
          &#9733;
        </span>
        <span className="calf" id="3" onClick={estrella}>
          &#9733;
        </span>
        <span className="calf" id="4" onClick={estrella}>
          &#9733;
        </span>
        <span className="calf" id="5" onClick={estrella}>
          &#9733;
        </span>
        <button onClick={addReviews} className="reviews__button">
          Agregar comentario
        </button>
      </div>
      <div className="reviews__div">
        {reviews.map((review) => {
          return review.idMovie === id ? (
            <p className="reviews__comment" key={review.id}>
              <b>&#8722; Comentario:</b> <br />
              &#62; {review.comment}
            </p>
          ) : undefined;
        })}
      </div>
    </>
  );
  // );
}
