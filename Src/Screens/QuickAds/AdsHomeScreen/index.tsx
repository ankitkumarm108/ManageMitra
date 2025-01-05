import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Container from '../../../Components/Container'
import { Colors } from '../../../Utils/Variables'
import SocialChanelSlider from './Components/SocialChanelSlider'

const AdsHomeScreen = () => {
    const navigation:any=useNavigation()
    console.log("this is navigation ",navigation)
  return (
    <Container isBalckTheme={false}>
<SocialChanelSlider />
<Text>h jk</Text>
    </Container>
  )
}

export default AdsHomeScreen