import React, { useEffect, } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { movieQuoteRequest } from "../thunk/getBook";

function MovieQuote(props) {
  const dispatch = useDispatch();
  const moviequoteinfo = useSelector((state) => state.viewMovieQuote.viewmoviequote);
  console.log(moviequoteinfo);
  const { id } = useParams();

  useEffect(() => {
    dispatch(movieQuoteRequest(id));
  }, []);

  return (
    <>
      <div className="d-flex flex-row bd-highlight mb-3">
        <div>
          <ul>
            <h5 className="text-danger">Movie</h5>
            {moviequoteinfo.map(moviequote => (
              <ul>
                <li key={moviequote._id}>{moviequote._id}</li>
                <li>{moviequote.dialog}</li>
              </ul>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MovieQuote