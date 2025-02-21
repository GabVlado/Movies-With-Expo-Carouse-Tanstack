import { Cast } from '@/infrastructure/interfaces/cast.interface'
import { CreditsResponse } from '@/infrastructure/interfaces/credits-response'
import { CastMapper } from '@/infrastructure/mappers/cast.mapper'
import { moviesAPi } from '../api/movie-api'

export const getCastByMovieID = async (movieId: number | string) => {
  try {
    const { data } = await moviesAPi.get<CreditsResponse>(`/${movieId}/credits`)
    //console.log('cast',data.cast)
    const response = data.cast.map(CastMapper.fromMovieDBCastFullToCast)
    //console.log(response)
    return response

  } catch (error) {
    //console.log(error)
    throw new Error('Error getting cast')
  }
}
