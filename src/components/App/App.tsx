import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import MovieGrid from '../MovieGrid/MovieGrid';
import MovieModal from '../MovieModal/MovieModal';
import SearchBar from '../SearchBar/SearchBar';
import getMovies from '../../services/movieService';
import type { Movie } from '../../types/movie';
import toast from 'react-hot-toast';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  function openModal(movie: Movie) {
    setSelectedMovie(movie);
  }
  function closeModal() {
    setSelectedMovie(null);
  }

  async function handleSearch(query: string) {
    try {
      setError(false);
      setMovies([]);
      setIsLoading(true);
      const response = await getMovies(query);
      if (response.length <= 0) {
        toast.error('No movies found for your request.');
      }
      setMovies(response);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieGrid onSelect={openModal} movies={movies} />}
      {selectedMovie && (
        <MovieModal onClose={closeModal} movie={selectedMovie} />
      )}
    </>
  );
}

export default App;
