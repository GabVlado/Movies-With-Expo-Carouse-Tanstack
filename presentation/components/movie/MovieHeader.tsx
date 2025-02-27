import { View, Text, useWindowDimensions, Image, Pressable } from 'react-native'
import { router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'

interface Props {
  poster: string
  originalTitle: string
  title: string
}

const MovieHeader = ({ poster, title, originalTitle }: Props) => {
  const { height: screenHeight } = useWindowDimensions()

  return (
    <>
      {/* Gradient */}
      <LinearGradient
        colors={['rgba(0,0,0,0.3)','transparent']}
        start={{ x: 0, y: 0 }}
        style={{
          height: screenHeight * 0.4,
          position: 'absolute',
          width: '100%',
          top: 0,
          zIndex: 1
        }}
      />

      {/* Go Back button  */}
      <View
        style={{
          position: 'absolute',
          elevation: 9,
          top: 35,
          left: 15,
          zIndex: 99,
        }}
      >
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons
            name="arrow-back"
            size={30}
            color="white"
            className="shadow"
          />
        </Pressable>
      </View>
      <View
        style={{ height: screenHeight * 0.7 }}
        className="shadow-xl shadow-black/20"
      >
        <View className="flex-1 rounded-b-[25px] overflow-hidden">
          <Image
            source={{ uri: poster }}
            resizeMode="cover"
            className="flex-1"
          />
        </View>
      </View>
      <View className="px-5 mt-5">
        <Text className="font-normal">{originalTitle}</Text>
        <Text className="font-semibold text-2xl">{title}</Text>
      </View>
    </>
  )
}

export default MovieHeader
