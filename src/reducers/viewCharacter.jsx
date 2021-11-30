import { VIEW_CHARACTER } from "../actions";

const initialState = {
  viewcharacter: [],
  }

  const viewCharacter= (state = initialState, action)=> {
    switch (action.type) {
      case VIEW_CHARACTER:
        return {
          ...state,
          viewcharacter: action.payload,
        };
      default:
        return state;
    }
  }

  export default viewCharacter;