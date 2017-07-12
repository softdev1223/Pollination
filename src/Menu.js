
import React, { Component } from 'react';
import { View, Text, StatusBar} from 'react-native';

StatusBar.setHidden(true);
export default class Menu extends Component {
render() {
   return (
     <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
     <Text> Menu </Text>
     </View>
   );
}
}
