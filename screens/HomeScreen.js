import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';



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
      <View className="flex-row py-3 items-center mx-4 space-x-2">
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
          <ChevronDownIcon color="#00CCBB" size={20} />
          </Text>
        </View>
        <View>
          <UserIcon size={30} color='#00CCBB'/>
        </View>
      </View>

      {/*Search*/}
      <View className='flex-row mx-4 space-x-3 items-center mb-2'>
        <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
          <MagnifyingGlassIcon size={20} color='#00CCBB'/>
          <TextInput placeholder='Restaurants and cuisines' keyboardType='default'/>
          
        </View>
        <AdjustmentsVerticalIcon color='#00CCBB'/>
      </View>

      {/*Body*/}
      <ScrollView 
      className='bg-gray-100' 
      contentContainerStyle={{paddingBottom:100}}>

        {/* Categories */}
        <Categories/>

        {/* Featured */}
        <FeaturedRow
        id='1'
        title='Featured'
        description='Paid placements from our partners'
         
        />

        {/* Tasty Discounts */}
        <FeaturedRow
        id='2'
        title='Tasty Discounts'
        description='Eveyones been enjoying these juicy discounts!'
         
        />

        {/* Offers Near You */}
        <FeaturedRow
        id='3'
        title='Offers Near You'
        description='Why not support your local restaurant tonight!'
         
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen