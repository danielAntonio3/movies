import React, { createContext, useReducer } from 'react';

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

  const addReview = (movie, starts, comment) => {
    setMovies({ type: 'addStarts', movie, starts });
    dispatchReviews({
      type: 'addReview',
      idMovie: movie.id,
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
