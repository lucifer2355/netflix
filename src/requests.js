const API_KEY = "9f9c59c1da7d67cf4e663ed7dce50af8";

const requests = {
  fetchTrending: `/tranding/all/week/?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOrigianls: `/discover/tv?api_key=${API_KEY}with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
