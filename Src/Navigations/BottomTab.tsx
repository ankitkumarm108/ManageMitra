import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { View } from 'react-native';
import Container from '../Components/Container';
import { Colors } from '../Utils/Variables';
import AdsHomeScreen from '../Screens/QuickAds/AdsHomeScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const bottomTab=()=>{
    return(
      <View>

      </View>
    )
  }
  return (
    <Container>
    <Tab.Navigator screenOptions={{headerShown:false}} tabBar={bottomTab}>
    <Tab.Screen name="HomeAdsHomeScreen" component={AdsHomeScreen} />
    {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
  </Tab.Navigator>
  </Container>
  )
}

export default BottomTab