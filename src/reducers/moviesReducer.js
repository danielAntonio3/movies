// Mockup (Como algo de prueba)
const mockup = [
  {
    id: '1',
    title: 'Ejemplo 1',
    img: 'https://picsum.photos/200/300/?random',
    starts: 0,
    numberOfReviews: 0,
    description: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
       Lorem Ipsum ha sido el texto de relleno`,
  },
  {
    id: '2',
    title: 'Ejemplo 2',
    img: 'https://picsum.photos/200/300/?random',
    starts: 0,
    numberOfReviews: 0,
    description: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
       Lorem Ipsum ha sido el texto de relleno`,
  },
  {
    id: '3',
    title: 'Ejemplo 3',
    img: 'https://picsum.photos/200/300/?random',
    starts: 0,
    numberOfReviews: 0,
    description: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
       Lorem Ipsum ha sido el texto de relleno`,
  },
  {
    id: '4',
    title: 'Ejemplo 4',
    img: 'https://picsum.photos/200/300/?random',
    starts: 0,
    numberOfReviews: 0,
    description: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
       Lorem Ipsum ha sido el texto de relleno`,
  },
];

export const moviesInitialState = {
  movies: mockup,
};

export default function moviesReduces(state, action) {
  let newState;
  switch (action.type) {
    case 'addStarts':
      const { movie, starts } = action;
      movie.starts += parseInt(starts);
      movie.numberOfReviews++;
      newState = { movies: [...state.movies] };
      break;
    default:
      newState = { movies: [...state.movies] };
      break;
  }
  return newState;
}
