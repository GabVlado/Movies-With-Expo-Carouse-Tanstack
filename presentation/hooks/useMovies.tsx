import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import { nowPlayingAction } from '@/core/actions/movies/now-playing.action'
import { popularMoviesAction } from '@/core/actions/movies/popular.action'
import { topRatedMoviesAction } from '@/core/actions/movies/top-rated.action'
import { upcomingMoviesAction } from '@/core/actions/movies/upcoming.action'

export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ['movies','nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24,  // 24 hours
    })

    const popularQuery = useQuery({
        queryKey: ['movies','popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24,  // 24 hours
    })

    const topRatedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies','top_rated'],
        queryFn:({ pageParam })=> {
            console.log(pageParam)
            return topRatedMoviesAction({page: pageParam })
        },
        getNextPageParam: (lastPage, pages) => {
            return (
                pages.length + 1
            )
        },
        staleTime: 1000 * 60 * 60 * 24,  // 24 hours
    })

    
    const upcomingQuery = useQuery({
        queryKey: ['movies','upcoming'],
        queryFn: upcomingMoviesAction,
        staleTime: 1000 * 60 * 60 * 24,  // 24 hours
    })



    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery
    }
}

