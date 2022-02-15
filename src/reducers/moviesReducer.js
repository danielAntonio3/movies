// Mockup (Como algo de prueba)
const mockup = [
  {
    _id: '1',
    title: 'Ejemplo 1',
    img: 'https://picsum.photos/200/300/?random',
    starts: 0,
    numberOfReviews: 0,
  },
  {
    _id: '2',
    title: 'Ejemplo 2',
    img: 'https://picsum.photos/200/300/?random',
    starts: 0,
    numberOfReviews: 0,
  },
  {
    _id: '3',
    title: 'Ejemplo 3',
    img: 'https://picsum.photos/200/300/?random',
    starts: 0,
    numberOfReviews: 0,
  },
  {
    _id: '4',
    title: 'Ejemplo 4',
    img: 'https://picsum.photos/200/300/?random',
    starts: 0,
    numberOfReviews: 0,
  },
];

export const moviesInitialState = {
  // movies: [],
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
    case 'addMovies':
      newState = { movies: [...action.movies] };
      break;
    default:
      newState = { movies: [...state.movies] };
      break;
  }
  return newState;
}
