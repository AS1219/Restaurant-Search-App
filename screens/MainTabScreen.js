import React from 'react';


import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../App';
import ContactsScreen from '../App';
import MessagesScreen from '../App';
import SettingsScreen from '../App';
import { TabActions } from '@react-navigation/native';


const MainTabScreen = () => {

    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#e91e63',
    }}
  >
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="ContactsScreen"
      component={ContactsScreen}
      options={{
        tabBarLabel: 'Contacts',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="Contacts" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="MessagesScreen"
      component={MessagesScreen}
      options={{
        tabBarLabel: 'Messages',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="Messages" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="SettingsScreen"
      component={SettingsScreen}
      options={{
        tabBarLabel: 'Messages',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="Settings" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
 };

 export default MainTabScreen;