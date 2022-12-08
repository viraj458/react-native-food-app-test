import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
      paddingHorizontal:15,
      paddingTop:10
    }}
    horizontal 
    showsVerticalScrollIndicator={false}
    >
      {/* CategoryCard */}

      <CategoryCard imgUrl='https://images.pexels.com/photos/5807020/pexels-photo-5807020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title='test'/>
      <CategoryCard imgUrl='https://images.pexels.com/photos/5807020/pexels-photo-5807020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title='test'/>
      <CategoryCard imgUrl='https://images.pexels.com/photos/5807020/pexels-photo-5807020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title='test'/>
      <CategoryCard imgUrl='https://images.pexels.com/photos/5807020/pexels-photo-5807020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title='test'/>
      <CategoryCard imgUrl='https://images.pexels.com/photos/5807020/pexels-photo-5807020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title='test'/>
      <CategoryCard imgUrl='https://images.pexels.com/photos/5807020/pexels-photo-5807020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title='test'/>
      <CategoryCard imgUrl='https://images.pexels.com/photos/5807020/pexels-photo-5807020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title='test'/>

    </ScrollView>
  )
}

export default Categories