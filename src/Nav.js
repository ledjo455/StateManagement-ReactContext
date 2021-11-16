import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import "./Nav.css";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="navbar">
      <h5>List of movies: {movies.length} </h5>
    </div>
  );
};

export default Nav;
