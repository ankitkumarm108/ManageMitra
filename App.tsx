import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DrawerApp from './Src/Navigations/Drawer'

const App = () => {
  const RootStack=createNativeStackNavigator()
  return (
 <NavigationContainer>
  <RootStack.Navigator screenOptions={{headerShown:false}}>
    <RootStack.Group>
      <RootStack.Screen name='Drawer' component={DrawerApp}/>
    </RootStack.Group>
  </RootStack.Navigator>
 </NavigationContainer>
  )
}

export default App