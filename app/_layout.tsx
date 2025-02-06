import { View, Text } from 'react-native'
import "../global.css";
import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';



const RootLayout = () => {

   nowPlayingAction();
  return (
    <View>
      <Text className='text-3xl text-green-600'>Root Layout</Text>
    </View>
  )
}

export default RootLayout
