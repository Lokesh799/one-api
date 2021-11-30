import React, { useEffect, } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { movieRequest } from "../thunk/getBook";

function Movie (props) {
  const dispatch = useDispatch();
  const movieinformation = useSelector((state) => state.viewMovie.viewmovie);  
  console.log(movieinformation);
  
    useEffect(()=>{
      dispatch(movieRequest());
    },[]);

    return(
     
        <>
      <div>
        <h1>Movie Details</h1>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">MovieName</th>
              <th scope="col">ID</th>
              <th scope="col">Runtime MIN...</th>
              <th scope="col">Button</th>
            </tr>
          </thead>
          <tbody>
            {
              
              movieinformation.map(movie => (
                <tr>
                  <td key={movie.id}>{movie.name}</td>
                  <td >{movie._id}</td>
                  <td >{movie.runtimeInMinutes}</td>
                  
                  <td>
                     <Link  to={`/movie/${movie._id}/quotes`}><button>ViewMovieQuote </button></Link>
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