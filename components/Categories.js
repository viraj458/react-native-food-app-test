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

      <CategoryCard imgUrl='https://reactjs.org/logo-og.png' title='test'/>
      <CategoryCard imgUrl='https://reactjs.org/logo-og.png' title='test'/>
      <CategoryCard imgUrl='https://reactjs.org/logo-og.png' title='test'/>
      <CategoryCard imgUrl='https://reactjs.org/logo-og.png' title='test'/>
      <CategoryCard imgUrl='https://reactjs.org/logo-og.png' title='test'/>
      <CategoryCard imgUrl='https://reactjs.org/logo-og.png' title='test'/>
      <CategoryCard imgUrl='https://reactjs.org/logo-og.png' title='test'/>

    </ScrollView>
  )
}

export default Categories