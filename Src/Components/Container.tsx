import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { container } from '../Utils/Interface/Interfaces'
import { CommonStyles } from '../Styles/CommonStyles'
import Colors from '../Utils/Colors'

const Container:React.FC<container> = ({bottomSafeareColor=Colors.white,isBalckTheme,style,children,...props}) => {
  return (
    <View style={CommonStyles.Container}>
        <StatusBar backgroundColor={Colors.white} barStyle={isBalckTheme?'light-content':"dark-content"} />
          <SafeAreaView style={{backgroundColor:isBalckTheme?"black":"white"}} />
          <View {...props} style={[style,CommonStyles.Container]}>
          {children}
          </View>
     <SafeAreaView style={{backgroundColor:bottomSafeareColor}} />
    </View>
  )
}

export default Container