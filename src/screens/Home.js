import React, { Component } from 'react';
import {StyleSheet, Image,Dimensions, Button} from 'react-native';

export default class Home extends Component {

  static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/backbt.png')}
        />
      ),
    };

    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      );
    }

    componentDidMount() {
      this.props.navigation.navigate("Login")
    }

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
      gridView: {
      paddingTop: 0,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
      // width:150,
      flex:1
    },
    itemUp: {
      fontSize: 16,
      backgroundColor: '#0000',
      fontWeight: '600',
      // color: '#fff'
    },
    itemDown: {
      fontWeight: '600',
      fontSize: 12,
      backgroundColor: '#0000',
      // color: '#fff'
    },
})
