import React, { useEffect, } from "react";
import { useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { movieQuoteRequest } from "../thunk/getBook";

function MovieQuote(props) {
  const dispatch = useDispatch();
  const moviequoteinfo = useSelector((state) => state.viewMovieQuote.viewmoviequote);  
  console.log(moviequoteinfo);
  const {id}=useParams(); 
  console.log(id)

    useEffect(()=>{
      dispatch(movieQuoteRequest(id));
      console.log(id)
    },[]);
  
    return(
        <>
      <div className ="d-flex flex-row bd-highlight mb-3">
        <div>
          <ul>
            <h5 className ="text-danger">Movie</h5>
              {moviequoteinfo.map(moviequote =>(
                <li key={moviequote.id}>{moviequote.dialog}</li>
                
        ))}
          </ul>
          </div>
      </div>  
        </>
    );
 }


export default MovieQuote