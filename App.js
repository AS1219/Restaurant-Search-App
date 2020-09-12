import * as React from 'react';
import { Text, View, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator, createAppContainer} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AuthContext } from './components/context';

import RootStackScreen from './screens/RootStackScreen';

import AsyncStorage from '@react-native-community/async-storage';

import HomeScreen from './screens/HomeScreen';
import NearbyScreen from './screens/NearbyScreen';
import ContactsScreen from './screens/ContactsScreen';
import SettingsScreen from './screens/SettingsScreen';

import ResultsShowScreen from './screens/ResultsShowScreen';



const Tab = createBottomTabNavigator();
const NearByStack = createStackNavigator();
const ResultsShow = createStackNavigator();

const NearByStackScreen = ({navigation}) => (
  <NearByStack.Navigator>
    <NearByStack.Screen name="NearBy" component={NearbyScreen} />
    <NearByStack.Screen name="ResultsShow" component={ResultsShowScreen} />
  </NearByStack.Navigator>
);




export default function App() {

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
        case 'LOGIN':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false
        };
        case 'LOGOUT':
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false
        };
        case 'REGISTER':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      const userToken = String(foundUser[0].userToken);
      const email = foundUser[0].email;
        try {
        userToken = 'dfgdfg';
        await AsyncStorage.setItem('userToken', userToken)
        } catch(e) {
          console.log(e);
        }
      dispatch({ type: 'LOGIN', id: email, token: userToken });
    },
    signOut: async() => {
     try {
      await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
     dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      setUserToken('asdf');
      setIsLoading(false);
    }
  }), []);

  React.useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }

      dispatch({ type: 'REGISTER', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      { loginState.userToken != null ? (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Nearby') {
              iconName = focused ? 'ios-search' : 'ios-search';
            } else if (route.name === 'Contacts') {
              iconName = focused ? 'ios-contacts' : 'ios-contacts';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
  
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Nearby" component={NearByStackScreen} />
          <Tab.Screen name="Contacts" component={ContactsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />

        
      </Tab.Navigator>
      
      )
      :
      <RootStackScreen/>
    }
    </NavigationContainer>
    </AuthContext.Provider>
    );
    
}
