import React, { useEffect, } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { movieRequest } from "../thunk/getBook";
import { viewMovieFilter } from "../actions";

function Movie(props) {
  const dispatch = useDispatch();
  const viewmovies = useSelector((state) => state.viewMovie.movieFilter.movieFilter);
  const filters = useSelector((state) => state.viewMovie.movieFilter.filters);
  console.log("i am filter", filters)

  const handleChange = (event) => {
    const { value, name } = event.target;
    dispatch(viewMovieFilter({ [name]: value }));
  }

  useEffect(() => {
    const getMovieRecords = () => {
      dispatch(movieRequest(filters));
    };

    getMovieRecords();
  }, [filters.limits]);

  return (
    <>
      <div>
        <h1>Movie Details</h1>
      </div>
      <div>
        <select name="limits" value={filters.limit} onChange={handleChange}>
          <option value={100}>100</option>
          <option value={200}>200</option>
          <option value={300}>300</option>
          <option value={400}>400</option>
          <option value={500}>500</option>
          <option value={600}>600</option>
        </select>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">MovieName</th>
              <th scope="col">ID</th>
              <th scope="col">Runtime MIN...</th>
              <th scope="col">BudgetMillion</th>
              <th scope="col">Button</th>
            </tr>
          </thead>
          <tbody>
            {
              viewmovies.map(movie => (
                <tr>
                  <td key={movie.id}>{movie.name}</td>
                  <td >{movie._id}</td>
                  <td >{movie.runtimeInMinutes}</td>
                  <td >{movie.budgetInMillions}</td>

                  <td>
                    <Link className='btn btn-primary' to={`/moviequote/${movie._id}`}>view Movie quote</Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}


export default Movie