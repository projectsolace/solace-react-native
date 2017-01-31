import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import store from '../store.native';
import { fetchThreeQuestions } from '../reducer/questions.native';


export default class Modal extends Component {

    constructor(props){
      super(props)
      this.state = {
        questions:[]
      }
    }

    componentDidMount() {
      let allQuestions = store.dispatch(fetchThreeQuestions())

    }

  render(){
    return (
      <View style={styles.container}>

        <Swiper style={styles.wrapper} showsButtons={true}>

            <View style={styles.slide1}>
              <Text onPress={() => Actions.pop()} > X </Text>
              <Text style={styles.text}>Quote1</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Quote2</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>Quote3</Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  }
});


