import React, { useState, useEffect } from "react";
import axios from "../api/axios";

function Row({ title, fetchUrl }) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
