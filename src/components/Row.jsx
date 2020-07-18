import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import "../style/row.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row_posters'>
        {movies.map((movie) => (
          <img
            className='row_poster'
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
