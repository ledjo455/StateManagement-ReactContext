import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([]);
  return (
    <div>
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
    </div>
  );
};
