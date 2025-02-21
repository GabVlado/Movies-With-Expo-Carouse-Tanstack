import { getCastByMovieID } from '@/core/actions/cast/cast-by-movie.action'
import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id.action'
import { useQuery } from '@tanstack/react-query'


export const useMovie = (id:number) => {

    const movieQuery = useQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovieByIdAction(id),
        staleTime: 1000 * 60 * 60 * 24 // 24 horas
    })

    const castQuery = useQuery({
        queryKey: ['movie',id, 'cast' ],
        queryFn: () => getCastByMovieID(id),
        staleTime: 1000 * 60 * 60 * 24 // 24 horas
    })


    return {
        movieQuery,
        castQuery
    }


}
