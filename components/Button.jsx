import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Button() {
  return (
    <Pressable style={
        {
            backgroundColor: '#3d7a4e',
            flex: 1,
            padding: 20,
            marginHorizontal: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
    
        }
    }>
      <Text style={{fontSize: 20, color: 'white'}}>Button</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({})