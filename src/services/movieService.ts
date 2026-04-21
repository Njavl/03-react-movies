import axios from 'axios';

const Token = import.meta.env.VITE_TMDB_TOKEN;

function getMovies(query: string) {
  return axios({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    headers: {
      Authorization: `Bearer  ${Token}`,
    },
    params: {
      query: query,
    },
  });
}
export default getMovies;
