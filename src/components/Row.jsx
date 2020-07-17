import React, { useState } from "react";

function Row({ title, fetchUrl }) {
  const [movies, setmovies] = useState([]);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
