import React, { useState, useContext, useRef } from "react";
import { MovieContext } from "./MovieContext";
import "./AddMovie.css";

const AddMovie = () => {
  //used both state and ref to get the value from input for demostration
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  //Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
  //It is very useful for keeping any mutable/changeable value around
  // useRef creates a plain JavaScript object and will give the same ref object on every render
  const categoryRef = useRef(null);
  const [movies, setMovies] = useContext(MovieContext);
  const [id, setId] = useState(10000 || movies[movies.length - 1].id + 1);

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setId(id + 1);
    setMovies((prevMovies) => [
      ...prevMovies,
      { name: name, price: price, id: id, category: categoryRef.current.value },
    ]);
    console.log("kjo eshte id", movies);
  };

  return (
    <div className="formContainer">
      <form>
        <input
          name="name"
          placeholder="Name"
          value={name}
          onChange={updateName}
          className="name_input"
        />
        <input
          name="price"
          className="price_input"
          placeholder="Price"
          value={price}
          onChange={updatePrice}
        />
        <input
          name="category"
          className="category_input"
          placeholder="Category"
          ref={categoryRef}
        />
        <button onClick={addMovie}>Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
