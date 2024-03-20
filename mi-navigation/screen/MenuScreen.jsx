import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const MenuScreen = () => {
  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Control')}>
          <Text>control-screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuScreen