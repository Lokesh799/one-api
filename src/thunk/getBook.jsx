import axios from 'axios';
import { viewBook, viewMovie, viewMovieQuote } from '../actions';


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

export const movieRequest = (prevFilters) => async (dispatch) => {
  try {
    const params = {
      budgetInMillions: prevFilters.limits,

    };
    
    console.log("value", params.budgetInMillions)
    const { data: { docs } } = await client.get(`/movie?budgetInMillions<${params}`,);
    dispatch(viewMovie({ movieFilter: docs }));
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

