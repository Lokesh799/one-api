import axios from "axios";
import { viewCharacter,viewCharacterFilter } from "../actions";


const client = axios.create({
  baseURL: `https://the-one-api.dev/v2`,
});

client.defaults.headers.common['Authorization'] = 'Bearer sFEc0NmG4iiZewtXRx73';

export const characterRequest = (prevFilters) => async (dispatch) => {
  try {
    const params = {
      limit: prevFilters.limit,
      page: prevFilters.page,
      // sort: `${prevFilters.orderBy}:${prevFilters.order}`,
    };
    const response = await client.get('/character');
    dispatch(viewCharacter(response.data.docs));
  } catch (err) {
    console.log(err);
  }
}