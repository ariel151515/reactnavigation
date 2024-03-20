import { View, Text  } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';


const MenuScreen = () => {
  const navigation = useNavigation()

  return (
    <View>
     <>
        <TouchableOpacity onPress={() => navigation.navigate('Control')}>
          <Text>control-screen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('MenuDos')}>
          <Text>Menu Dos</Text>
        </TouchableOpacity>
     </>
    </View>
  )
}

export default MenuScreen