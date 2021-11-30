import { VIEW_BOOK } from "../actions";

const initialState = {
  viewbook: [],
  }

  const viewBook= (state = initialState, action)=> {
    switch (action.type) {
      case VIEW_BOOK:
        return {
          ...state,
          viewbook: action.payload,
        };
      default:
        return state;
    }
  }

  export default viewBook;