import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`,
  );
  return search.data;
};

export const getTrendingMovies = async () => {
  const trending = await axios.get(
    `${baseUrl}/trending/movie/day?page=1&api_key=${apiKey}`,
  );
  return trending.data.results;
};

export const getPopularMovies = async (p) => {
  const popular = await axios.get(
    `${baseUrl}/movie/popular?page=${p}&api_key=${apiKey}`,
  );
  return popular.data.results;
};
export const getNowPlayingMovies = async () => {
  const nowPlaying = await axios.get(
    `${baseUrl}/movie/now_playing?page=1&api_key=${apiKey}`,
  );
  return nowPlaying.data.results;
};

export const getTopRatedMovies = async () => {
  const topRated = await axios.get(
    `${baseUrl}/movie/top_rated?page=1&api_key=${apiKey}`,
  );
  return topRated.data.results;
};

export const getUpcomingMovies = async () => {
  const upcoming = await axios.get(
    `${baseUrl}/movie/upcoming?page=1&api_key=${apiKey}`,
  );
  return upcoming.data.results;
};

export const getDetailMovie = async (id) => {
  const detail = await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`);
  return detail.data;
};

export const getTrailerMovie = async (id) => {
  const trailer = await axios.get(
    `${baseUrl}/movie/${id}/videos?api_key=${apiKey}`,
  );
  return trailer.data.results;
};

export const getCreditsMovie = async (id) => {
  const credits = await axios.get(
    `${baseUrl}/movie/${id}/credits?api_key=${apiKey}`,
  );
  return credits.data.cast;
};

export const getReviewsMovie = async (id) => {
  const reviews = await axios.get(
    `${baseUrl}/movie/${id}/reviews?page=1&api_key=${apiKey}`,
  );
  return reviews.data.results;
};

export const getSimilarMovies = async (id) => {
  const similar = await axios.get(
    `${baseUrl}/movie/${id}/similar?page=1&api_key=${apiKey}`,
  );
  return similar.data.results;
};

export const getGenresMovie = async () => {
  const genre = await axios.get(
    `${baseUrl}/genre/movie/list?api_key=${apiKey}`,
  );
  return genre.data.genres;
};
