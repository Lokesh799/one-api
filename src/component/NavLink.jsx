import React from "react";
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';


export default function navLink(){
  return(
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-link">
        <Link className='link-primary'to='/book'>Book</Link>
        </li><br/>
        <li class="nav-link">
        <Link className='link-info' to='/movie'>Movie</Link>
        </li>
        {/* <li class="nav-link">
        <Link className='link-warnig' to='/moviequote'>movieQuote</Link>
        </li> */}
        <li class="nav-link">
        <Link className='link-danger' to='/character'>character</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}   
