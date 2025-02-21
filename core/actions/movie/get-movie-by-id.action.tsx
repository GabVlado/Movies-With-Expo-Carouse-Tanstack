import { moviesAPi } from '../api/movie-api';
import { MovieDBResponseMovieByID } from '@/infrastructure/interfaces/moviedb-movieById-response';
import { CompleteMovie } from '@/infrastructure/interfaces/movie.interface';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

export const getMovieByIdAction = async (id:number | string): Promise<CompleteMovie> => {
  try {
    const { data } = await moviesAPi.get<MovieDBResponseMovieByID>(`/${id}`);

    //console.log(data);
    //console.log('Pelicula HTTP Cargada');

    return MovieMapper.fromTheMovieDBCompleteMovie(data);


  } catch (error) {
    //console.error('Error:', error)
    throw "Cannot load now playing movies";
  }
};
