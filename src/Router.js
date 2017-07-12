import React, { Component } from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { Dimensions, Image, Text, StyleSheet } from 'react-native';
import Home from './screens/Home';
import Menu from './Menu';
import Login from './screens/Login';
import Signup from './screens/Signup';

const { width } = Dimensions.get('window');

export const HomeStack = StackNavigator({
  People: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <Text>HomeScreen</Text>  ,
      headerStyle: { backgroundColor: 'white', paddingBottom:15},
      headerTitleStyle: {color: '#a7c3f2'},
      headerLeft: <MenuIcon {...navigation} />,
    }),
  },

  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sign In</Text>  ,
      headerStyle: { backgroundColor: '#E6E7E8', paddingBottom:15},
      headerTitleStyle: {color: '#a7c3f2'},
      headerLeft: <BackIcon {...navigation} />,
    }),
  },

  Signup: {
    screen: Signup,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sign Up</Text>  ,
      headerStyle: { backgroundColor: '#E6E7E8', paddingBottom:15},
      headerTitleStyle: {color: '#a7c3f2'},
      headerLeft: <BackIcon {...navigation} />,
    }),
  },

});

const MenuIcon = ({ navigate }) => {
  return (
    <Image
      source={require('./assets/backbt.png')}
      onPress={() => navigate('DrawerOpen')}
    />
  );
}

const BackIcon = ({ navigate }) => {
  return (
    <Image
      source={require('./assets/backbt.png')}
      onPress={() => navigate('DrawerOpen')}
    />
  );
}

export const SideMenu = DrawerNavigator(
  {
    near: {
      screen: HomeStack,
    }
  },
  {
    drawerWidth: width * 4 / 5,
    drawerPosition: 'left',
    contentComponent: props => <Menu {...props} />
  }
);
