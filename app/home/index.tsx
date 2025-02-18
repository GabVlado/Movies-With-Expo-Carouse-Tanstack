import { View, Text, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from "@/presentation/hooks/useMovies";
import MainSlideShow from '@/presentation/components/movies/MainSlideShow';

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();
  const safeArea = useSafeAreaInsets()

  if( nowPlayingQuery.isLoading){
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator
          color='purple'
          size={40}
        />
      </View>

    );

  }

  return (

    <View className='mt-2' style={{ paddingTop: safeArea.top}}>
      <Text className='text-3xl font-bold px-4 mb-2'>Movies App</Text>

      {/* Carousel  */}
      <MainSlideShow
        movies={nowPlayingQuery.data ??  []}
      />


    </View>
  );
};

export default HomeScreen;
