import { MoviesDBResponse } from '@/infrastructure/interfaces/moviedb-response';
import { moviesAPi } from '../api/movie-api'
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

export const popularMoviesAction = async() => {

    try {
        const { data } = await moviesAPi.get<MoviesDBResponse>('/popular')

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)

        console.log('Mapped Movies:', movies);
        return movies;

    } catch (error) {
        console.error('Error:', error)
        throw 'Cannot load now playing movies'
    }

}
