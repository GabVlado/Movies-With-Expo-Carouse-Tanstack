import { MoviesDBResponse } from '@/infrastructure/interfaces/moviedb-response';
import { moviesAPi } from '../api/movie-api'
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

export const nowPlayingAction = async() => {

    try {
        const { data } = await moviesAPi.get<MoviesDBResponse>('/now_playing')

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)

        console.log('Mapped Movies:', movies);

    } catch (error) {
        console.error('Error:', error)
        throw 'Cannot load now playing movies'
    }

}
