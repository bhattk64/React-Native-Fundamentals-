import { StyleSheet } from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Search from './src/screens/Search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
      <Stack.Screen options={{ headerShown: false }} name="Search" component={Search} />
    </Stack.Navigator>
  );
};
const TabNavigator = () => {
  return(
    <Tab.Navigator options={{tabBarActiveTintColor:"red"}}>
      <Tab.Screen  name="Home" component={Home} options={{tabBarLabel:"Home" ,
      tabBarIcon:()=>(
        <Icon name="home" size={30} color="#900" />
      )


      }} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
     {/* <StackNavigator /> */}
     <TabNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
