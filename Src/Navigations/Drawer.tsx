import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const DrawerStack = createDrawerNavigator();

const customDrawerContent = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <StatusBar backgroundColor={"black"} />
      <Text>khvjkklkml</Text>
    </SafeAreaView>
  );
};

const Drawer = () => {
  return (
    <DrawerStack.Navigator
      drawerContent={customDrawerContent}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle:{
          backgroundColor: "rgba(0,0,0,0.2)",
          // backgroundColor:"red"
        },
        overlayColor: 'rgba(0,0,0,0.1)',
        // drawerHideStatusBarOnOpen: true
      }}>
      <DrawerStack.Screen name="BottomTab" component={BottomTab} />
    </DrawerStack.Navigator>
  );
};
export default Drawer;
