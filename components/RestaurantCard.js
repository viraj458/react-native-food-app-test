import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapIcon, MapPinIcon } from 'react-native-heroicons/outline'

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  ahort_description,
  dishes,
  long,
  lat
}) => {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow-sm'>
      <Image
      source={{
        uri: imgUrl
      }}
      className='h-36 w-64 rounded-sm'
      />

      <View className='px-3 pb-4'>
        <Text className='font-bold pt-2 text-lg'>{title}</Text>

        <View className='flex-row items-center space-x-1'>
          <StarIcon size={20} color='green' opacity={0.5}/>
          <Text className='text-xs text-gray-500'>
            <Text className='text-green-500'>{rating}</Text> . {genre}
          </Text>
        </View>

        <View className='flex-row items-center space-x-1 pt-1'>
          <MapPinIcon color='gray' opacity={0.4} size={20}/>
          <Text className='text-xs text-gray-500'>Nearby . {address}</Text>
        </View>
      </View>

      
      
    </TouchableOpacity>
  )
}

export default RestaurantCard