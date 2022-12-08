import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id,title,description}) => {
  return (
    <View className=' '>
        <View className='mx-4 pt-2 flex-row justify-between item-center'>
            <Text className='font-bold text-lg'>{title}</Text>
            <ArrowRightIcon color='#00CCBB'/>
        </View>
        <View>
            <Text className='mx-4 text-xs text-gray-500'>{description}</Text>
        </View>
        <ScrollView
        className='pt-4'
        contentContainerStyle={{
            paddingHorizontal:15
          }}
        horizontal 
        ShowsVerticalScrollIndicator={false}>
            {/* RestaurantCards */}
            <RestaurantCard 
                id={1}
                imgUrl='https://images.pexels.com/photos/5807020/pexels-photo-5807020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                title='Sushi J'
                rating={4.9}
                genre='Japanese'
                address='ABC,Fasd,Sds'
                ahort_description='ABC,Fasd,Sds'
                dishes={[]}
                long={20}
                lat={4}
            />
            <RestaurantCard 
                id={1}
                imgUrl='https://images.pexels.com/photos/5807020/pexels-photo-5807020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                title='Sushi J'
                rating={4.9}
                genre='Japanese'
                address='ABC,Fasd,Sds'
                ahort_description='ABC,Fasd,Sds'
                dishes={[]}
                long={20}
                lat={4}
            />
            
        </ScrollView>
    </View>
  )
}

export default FeaturedRow