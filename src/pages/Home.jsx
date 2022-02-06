import React from 'react';
import Movies from '../components/Movies';

export default function Home() {
  // Mockup (Como algo de prueba)
  const movies = [
    {
      id: '1',
      title: 'Ejemplo 1',
      img: 'https://picsum.photos/200/300/?random',
    },
    {
      id: '2',
      title: 'Ejemplo 2',
      img: 'https://picsum.photos/200/300/?random',
    },
    {
      id: '3',
      title: 'Ejemplo 3',
      img: 'https://picsum.photos/200/300/?random',
    },
    {
      id: '4',
      title: 'Ejemplo 4',
      img: 'https://picsum.photos/200/300/?random',
    },
  ];

  return (
    <div className="page">
      <Movies movies={movies} />
    </div>
  );
}
