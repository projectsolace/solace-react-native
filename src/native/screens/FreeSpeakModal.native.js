import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import store from '../store.native';
import { connect } from 'react-redux';


export default class FreeSpeakModal extends Component {

    constructor(props){
      super(props)
    }

  render(){

    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
            <Text onPress={() => Actions.pop()} > X </Text>
            <Text style={styles.text}> What's currently on your mind? </Text>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginLeft: 30,
    marginRight: 30,
    textAlign:'center',
    lineHeight: 30
  }
});

