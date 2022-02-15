import React, { createContext, useReducer, useEffect } from 'react';

import moviesReduces, { moviesInitialState } from './../reducers/moviesReducer';
import reviewsReducer, {
  reviewsInitialState,
} from './../reducers/reviewsReducer';
export const moviesContext = createContext();

export default function MoviesContext({ children }) {
  const [movies, setMovies] = useReducer(moviesReduces, moviesInitialState);
  const [reviews, dispatchReviews] = useReducer(
    reviewsReducer,
    reviewsInitialState
  );

  // useEffect(() => {
  //   fetch('https://backendtzuzulcode.wl.r.appspot.com/movies')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMovies({ type: 'addMovies', movies: data });
  //     });
  // }, []);

  const addReview = (movie, starts, comment) => {
    setMovies({ type: 'addStarts', movie, starts });
    dispatchReviews({
      type: 'addReview',
      idMovie: movie._id,
      comment,
    });
  };

  return (
    <moviesContext.Provider
      value={{ movies: movies.movies, addReview, reviews: reviews.reviews }}
    >
      {children}
    </moviesContext.Provider>
  );
}
