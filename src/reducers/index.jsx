
import { combineReducers } from 'redux';
import viewBook from './viewBooks';
import viewMovie from './viewMovies';
import viewMovieQuote from './viewMovieQuote';
import viewCharacter from './viewCharacter';

const reducer= combineReducers({
  viewBook,
  viewMovie,
  viewMovieQuote,
  viewCharacter,
});
export default reducer;