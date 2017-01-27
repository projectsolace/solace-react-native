import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, InputGroup, Input, Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Homepage extends Component {
  render() {
    return (
      <Image source={ require('../../../images/sky.jpeg')} style={ styles.container } >
        <View style={styles.content}>
          <Button style={{alignSelf: 'center'}}>
            You've made it
          </Button>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)',
    resizeMode: 'stretch'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    fontFamily: 'Helvetica',
    color: 'white',
    fontWeight: 'bold'
  },
  inputField: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    color: 'white',
    fontWeight: 'bold'
  },
  inputCreds: {
    paddingLeft: 15,
    marginBottom: 17,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderColor: 'rgba(0,0,0,0)'
  },
  login: {
    marginLeft: 20,
    marginRight: 20
  }
});
