import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import requests from "../api/requests";
import "../style/banner.css";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrigianls);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className='banner_contents'>
        <h1 className='banner_title'>
          {movies?.title || movies?.name || movies?.original_name}
        </h1>

        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>

        <h1 className='banner_description'>{movies?.overview}</h1>
      </div>
    </header>
  );
}

export default Banner;
