import axios from 'axios';
import type { Movie } from '../types/movie';

const Token = import.meta.env.VITE_TMDB_TOKEN;

async function getMovies(query: string): Promise<Movie[]> {
  const { data } = await axios<{
    results: Movie[];
  }>({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    headers: {
      Authorization: `Bearer ${Token}`,
    },
    params: {
      query: query,
    },
  });

  return data.results;
}
export default getMovies;
