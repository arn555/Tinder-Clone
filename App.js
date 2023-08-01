import { StyleSheet, Text, View } from 'react-native'
import MainNavigation from './src/navigation/MainNavigation'
import React from 'react'

export default function App() {
  return (
    <View style={{flex:1}}>
      <MainNavigation />
    </View>
  )
}

const styles = StyleSheet.create({})