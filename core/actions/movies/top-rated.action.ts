import { MoviesDBResponse } from '@/infrastructure/interfaces/moviedb-response';
import { moviesAPi } from '../api/movie-api'
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

interface Options {
    page?: number;
    limit?: number;
}


export const topRatedMoviesAction = async( { page = 1, limit = 10}: Options) => {

    try {
        const { data } = await moviesAPi.get<MoviesDBResponse>('/top_rated',{
            params: {
                page: page,
            }
        })

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)

        //console.log('Mapped Movies:', movies);
        return movies;

    } catch (error) {
        //console.error('Error:', error)
        throw 'Cannot load now playing movies'
    }

}
