import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, AlertIOS, AsyncStorage } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, InputGroup, Input, Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { currentUser } from '../reducer/UserReducer.native'
import store from '../store.native';
import Avg from './AverageChart'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory-native'



var STORAGE_KEY = 'id_token';

 class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: {}
    };

  }

  render() {
    console.log('here comes the state', this.state)
    return (
      <Image source={{ uri: 'https://s3.amazonaws.com/watsonapi/images/3.jpg'}} style={ styles.container }>
              <Button info style={{alignSelf: 'center'}}> Overtime Data </Button>
              <Button danger style={{alignSelf: 'center'}}> Average Data (Most Accurate) </Button>
              <Avg/>

      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)'
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


/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    allUsers: state.currentUser
  };
};

export default connect(mapStateToProps)(Charts);


