import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";



const HomeScreen = () => {

    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown:false
        })

    }, [])
  return (
    <SafeAreaView className='bg-white pt-5'>
      {/*Header*/}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <View>
          <Image
            source={{
              uri: "https://links.papareact.com/wru"
            }}
            className='h-7 w-7 bg-grey-300 p-4 rounded-full'
          />
        </View>
        <View className='flex-1'>
          <Text className='font-bold text-gray-500 text-xs'>Deliver Now</Text>
          <Text className='font-bold text-xl'>Current Location
          <ChevronDownIcon color="00CCBB" size={20} />
          </Text>
        </View>
        <View>
          <UserIcon size={35} color="00CCBB"/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen