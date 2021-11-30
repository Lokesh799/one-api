import { VIEW_MOVIE } from "../actions";

const initialState = {
  viewmovie: [],
  }

  const viewMovie= (state = initialState, action)=> {
    switch (action.type) {
      case VIEW_MOVIE:
        return {
          ...state,
          viewmovie: action.payload,
        };
      default:
        return state;
    }
  }

  export default viewMovie;