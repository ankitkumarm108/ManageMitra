import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Container from '../Components/Container';
import AdsHomeScreen from '../Screens/QuickAds/AdsHomeScreen';
import BottomData from '../Utils/Data/BottomData';
import { CommonStyles } from '../Styles/CommonStyles';
import ReviewMetrics from '../Screens/QuickReview/Metrics';
import ReviewScreen from '../Screens/QuickReview/Review';
import Screens from '../Utils/Screens';
import ReviewSetting from '../Screens/QuickReview/Setting';

const Tab = createBottomTabNavigator();


const BottomTab = () => {
  const bottomTab=({state,navigation})=>{
    console.log("this is state",state)
    return(
      <View style={[CommonStyles.rowView,CommonStyles.bgWhite,CommonStyles.spaceBetween,CommonStyles.w100,CommonStyles.pT8,CommonStyles.pB8,CommonStyles.pH16]}>
{
  BottomData.map((item)=>{
    console.log("first",state.index , item.id)
    const isFocused = state.index === item.id;
    const onPress = () => {
      const event = navigation.emit({
        type: "tabPress",
        target: item.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate({
          name: item.key,
          merge: true,
          params: {
            comingFromTab: true,
          },
        });
      }
    };
    return(
      <TouchableOpacity style={[CommonStyles.w25,isFocused&&{backgroundColor:"red"}]} onPress={onPress}>
        <View>
        <Image source={isFocused?item?.activeIcon:item?.icon} />
        </View>
        <Text>{item?.name}</Text>
        </TouchableOpacity>
    )

  })
}
      </View>
    )
  }
  return (
    <Container>
    <Tab.Navigator screenOptions={{headerShown:false}} tabBar={bottomTab}>
    <Tab.Screen name={Screens.ReviewHome} component={AdsHomeScreen} />
    <Tab.Screen name={Screens.ReviewScreen} component={ReviewScreen} />
    <Tab.Screen name={Screens.ReviewMetrics} component={ReviewMetrics} />
    <Tab.Screen name={Screens.ReviewSetting}component={ReviewSetting} />
  </Tab.Navigator>
  </Container>
  )
}

export default BottomTab