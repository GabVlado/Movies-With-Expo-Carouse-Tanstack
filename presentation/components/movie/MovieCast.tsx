import { View, Text , FlatList} from 'react-native';
import { Cast } from '@/infrastructure/interfaces/cast.interface';
import { ActorCard } from './ActorCard';

interface Props {
    cast:Cast[];

}

const MovieCast = ({cast}:Props) => {
  return (
    <View className='mt-5 mb-52'>
      <Text className='font-bold text-2xl px-5 mb-5'>MovieCast</Text>
      <FlatList
        data={cast}
        horizontal={true}
        keyExtractor={(item)=> item.id.toString() }
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ActorCard
            actor={item}
        /> }
      />
    </View>
  )
}

export default MovieCast
