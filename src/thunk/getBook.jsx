import axios from 'axios';
import { viewBook, viewMovie, viewMovieQuote, viewCharacter } from '../actions';

const client = axios.create({
  baseURL: `https://the-one-api.dev/v2`,
});

client.defaults.headers.common['Authorization'] = 'Bearer sFEc0NmG4iiZewtXRx73';

export const bookRequest = () => async (dispatch) => {
  try {
    const response = await client.get('/book');
    dispatch(viewBook(response.data.docs));
  } catch (err) {
    console.log(err);
  }
}

export const movieRequest = () => async (dispatch) => {
  try {
    const response = await client.get('/movie');
    dispatch(viewMovie(response.data.docs));
  } catch (err) {
    console.log(err);
  }
}


export const movieQuoteRequest = (id) => async (dispatch) => {
  try {
    const response = await client.get(`/movie/${id}/quote`);
    dispatch(viewMovieQuote(response.data.docs));
  } catch (err) {
    console.log(err);
  }
}

export const characterRequest = () => async (dispatch) => {
  try {
    const response = await client.get('/character');
    dispatch(viewCharacter(response.data.docs));
  } catch (err) {
    console.log(err);
  }
}