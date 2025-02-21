import { CompleteMovie } from '../interfaces/movie.interface';
import { MovieDBResponseMovieByID } from '../interfaces/moviedb-movieById-response';
import { Result } from "../interfaces/moviedb-response";

export class MovieMapper {
  static fromTheMovieDBToMovie = (movie: Result) => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      rating: movie.vote_average
    };
  };

  static fromTheMovieDBCompleteMovie = (movie: MovieDBResponseMovieByID ):CompleteMovie =>{
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      rating: movie.vote_average,
      budget: movie.budget,
      duration: movie.runtime,
      genres: movie.genres.map(genre => genre.name),
      originalTitle: movie.original_title,
      ProductionCompany: movie.production_companies.map(company => company.name)
    }
  }


}
