import { View, Text } from 'react-native'
import React from 'react'
import StackNavigator from './src/navigations/StackNavigator'

export default function App() {
  return (
    <View style={{flex:1}}>
      <StackNavigator/>
    </View>
  )
}