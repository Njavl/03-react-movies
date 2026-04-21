import css from './MovieGrid.module.css';

import type { Movie } from '../../types/movie';

interface MovieGridProps {
  onSelect: () => void;
  movies: Movie[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MovieGrid({ onSelect, movies }: MovieGridProps) {
  return (
    <ul className={css.grid}>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <div className={css.card}>
              <img
                className={css.image}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
              />
              <h2 className={css.title}>{movie.title}</h2>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieGrid;
