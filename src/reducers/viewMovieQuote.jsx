import { VIEW_MOVIE_QUOTE } from "../actions";

const initialState = {
  viewmoviequote: [],
  }

  const viewMovieQuote= (state = initialState, action)=> {
    switch (action.type) {
      case VIEW_MOVIE_QUOTE:
        return {
          ...state,
          viewmoviequote: action.payload,
        };
      default:
        return state;
    }
  }

  export default viewMovieQuote;