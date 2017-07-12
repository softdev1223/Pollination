import React, { Component } from 'react';
import {StyleSheet, Image,Dimensions, Text, View, TextInput, ScrollView, Button, TouchableOpacity} from 'react-native';
import { StackNavigator} from 'react-navigation';
import MyButton from '../components/MyButton.js';
import CircleButton from '../components/CircleButton.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Home extends Component {

   static navigationOptions = {
      drawerLabel: 'Signup',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/backbt.png')}
        />
      ),
    };

    constructor(props){
      super(props);
      this.state = {
        email: "",
        password: "",
      }
    }

    render() {
      return (
        <KeyboardAwareScrollView style={styles.scroll}>
        <View style={{flex: 1}}>
          <View style={styles.view}>
            <View>
              <Text style={styles.text}>City</Text>
              <TextInput
                  style={styles.textInput}
              />
            </View>

            <View>
                <Text style={styles.text}>Email</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                    value={this.state.email}
                    onChangeText={(text) => this.setState({email: text})}
                />
                <Text style={{fontSize: 12, fontFamily: 'Verdana', alignSelf: 'center'}}>Please provide valid email to receive activation code</Text>
            </View>

            <View>
              <Text style={styles.text}>Password</Text>
              <TextInput
                  style={styles.textInput}
              />
            </View>

            <View>
              <Text style={styles.text}>Confirm password</Text>
              <TextInput
                  style={styles.textInput}
              />
            </View>

          </View>

          <CircleButton
            source={require('../assets/backbt.png')}
            style={{alignSelf: 'center'}}
            onPressButton={this.press.bind(this)} />
        </View>
        </KeyboardAwareScrollView>
      );
    }

    press() {
      alert(this.state.email)
      // this.props.navigation.navigate("Signup")
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
    padding: 20,
    flexDirection: 'row'
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
  },
  view:{
    marginLeft: 0,
    marginRight: 0,
    alignSelf: "center",
    flex: 1
  }


})
