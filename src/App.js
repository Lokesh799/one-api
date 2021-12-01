import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, BrowserRouter as Router } from 'react-router-dom';
import navLink from './component/NavLink';
import Book from './component/Book';
import Movie from './component/Movie';
import movieQuote from './component/MovieQuote';
import Character from './component/Characters';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={navLink} />
        <Route path="/book" component={Book} />
        <Route path="/movie" component={Movie} />
        {/* <Route path="/movie/:id/moviequote" component={movieQuote} /> */}
        <Route path="/moviequote/:id" component={movieQuote} />
        <Route path="/character" component={Character} />
      </Router>

    </div>
  );
}

export default App;