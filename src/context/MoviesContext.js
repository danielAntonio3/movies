import React, { createContext, useState } from 'react';

export const moviesContext = createContext();

// Mockup (Como algo de prueba)
const mockup = [
  {
    id: '1',
    title: 'Ejemplo 1',
    img: 'https://picsum.photos/200/300/?random',
    starts: 0,
    numberOfReviews: 0,
  },
  {
    id: '2',
    title: 'Ejemplo 2',
    img: 'https://picsum.photos/200/300/?random',
    starts: 0,
    numberOfReviews: 0,
  },
  {
    id: '3',
    title: 'Ejemplo 3',
    img: 'https://picsum.photos/200/300/?random',
    starts: 0,
    numberOfReviews: 0,
  },
  {
    id: '4',
    title: 'Ejemplo 4',
    img: 'https://picsum.photos/200/300/?random',
    starts: 0,
    numberOfReviews: 0,
  },
];

export default function MoviesContext({ children }) {
  const [movies, setMovies] = useState(mockup);
  const [reviews, setReviews] = useState([]);

  return (
    <moviesContext.Provider value={{ movies, setMovies, reviews, setReviews }}>
      {children}
    </moviesContext.Provider>
  );
}
