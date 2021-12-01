import { VIEW_MOVIE, VIEW_MOVIE_FILTER } from "../actions";

const initialState = {
  movieFilter: {
    movieFilter: [],
    filters: { limits: 100 },
  },
}
export default function viewMovie(state = initialState, action) {
  switch (action.type) {
    case VIEW_MOVIE:
      return {
        ...state,
        movieFilter: {
          ...state.movieFilter,
          ...action.payload,
        },
      };
    case VIEW_MOVIE_FILTER:
      return {
        ...state,
        movieFilter: {
          ...state.movieFilter,
          filters: {
            ...state.movieFilter.filters,
            ...action.payload,
          }
        },
      };
    default:
      return state;
  }
}