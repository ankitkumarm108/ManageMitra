// import { View, Text } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import DrawerApp from './Src/Navigations/Drawer'

// const App = () => {
//   const RootStack=createNativeStackNavigator()
//   return (
//  <NavigationContainer>
//   <RootStack.Navigator screenOptions={{headerShown:false}}>
//     <RootStack.Group>
//       <RootStack.Screen name='Drawer' component={DrawerApp}/>
//     </RootStack.Group>
//   </RootStack.Navigator>
//  </NavigationContainer>
//   )
// }

// export default App


import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

const App = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });

    return () => {
      subscription?.remove();
    };
  }, []);

  const responsiveWidth = (percentage) => (dimensions.width * percentage) / 100;
  const responsiveHeight = (percentage) => (dimensions.height * percentage) / 100;

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.box,
          {
            width: responsiveWidth(80),
            height: responsiveHeight(80),
          },
        ]}
      >
        <Text style={styles.text}>Responsive Box</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default App;
