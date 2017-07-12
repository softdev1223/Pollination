import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from 'react-native';

const CircleButton = (props) => {

    return (
      <TouchableOpacity onPress={props.onPressButton}>
        <Image
          style={[styles.button, props.style]}
          source={props.source}
        />
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 100/2
    },
});

export default CircleButton;
