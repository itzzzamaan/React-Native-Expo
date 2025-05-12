import React from 'react'
import { Text, View } from 'react-native'

function Reels() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{height:'100%', width: '100%', backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ fontSize: 24 }}>Reels Screen</Text>
      </View>
    </View>
  )
}

export default Reels
