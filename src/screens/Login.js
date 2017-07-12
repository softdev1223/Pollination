import React, { Component } from 'react';
import {StyleSheet, Image,Dimensions, Text, View, TextInput, ScrollView, Button, TouchableOpacity} from 'react-native';
import { StackNavigator} from 'react-navigation';
import MyButton from '../components/MyButton.js';
import CircleButton from '../components/CircleButton.js';

export default class Home extends Component {

  static navigationOptions = {
      drawerLabel: 'Login',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/backbt.png')}
        />
      ),
    };

    render() {
      return (
        <View style={styles.scroll}>

          <View style={{flex: 1}}>
            <View>
              <Text style={styles.text}> Email</Text>
              <TextInput
                  style={styles.textInput}
              />
            </View>

            <View>
                <Text style={styles.text}> Password</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                />
            </View>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={this.press.bind(this)} style={{width:150, flex:1}}>
                <Text style={styles.text}>Forgot Password</Text>
              </TouchableOpacity>

                <TouchableOpacity onPress={this.press.bind(this)} style={{width:65}}>
                  <Text style={styles.text}>Sign up</Text>
                </TouchableOpacity>

            </View>

          </View>

          <CircleButton
            source={require('../assets/backbt.png')}
              style={{alignSelf: 'center'}}
            onPressButton={this.press.bind(this)} />

        </View>
      );
    }

    press() {
      this.props.navigation.navigate("Signup")
    }

}

const styles = StyleSheet.create({
  text:{
    fontSize: 14,
    fontFamily: 'Verdana',
    marginBottom: 10,
    marginTop: 20
  },
  scroll: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 50,
    paddingTop: 50,
    paddingRight: 50,
    paddingBottom: 0,
    flexDirection: 'column',
    flex: 1
  },
  textInput: {
    height: 40,
    fontSize: 14,
    backgroundColor: '#FFF',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#808080'
  }


})
