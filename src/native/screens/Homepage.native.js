import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, InputGroup, Input, Icon, Button, Container, Footer, FooterTab } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import { RNS3 } from 'react-native-aws3';
import axios from 'axios'
import secrets from './secrets.json';
import Charts from './chartScreens/Charts.native';
import Recording from './Recording.native.js';
import Account from './Account.native.js';
import { fetchAQuote } from '../reducer/quote.native';
import { getImageId } from '../reducer/admin.native';
import store from '../store.native';

let audioPath = AudioUtils.DocumentDirectoryPath + '/watson2.wav';

AudioRecorder.prepareRecordingAtPath(audioPath, {
  SampleRate: 22050,
  Channels: 1,
  AudioQuality: 'Low',
  AudioEncoding: 'lpcm'
});

class Homepage extends Component {
    // EI: why is it necessary to pass in context?
    constructor(props, context) {
        super(props, context);
        this.state = {
          statsActive: false,
          microphoneActive: true,
          personActive: false,
          imageId: 1
        };
        this.toggleStatsActiveButton = this.toggleStatsActiveButton.bind(this);
        this.toggleMicrophoneActiveButton = this.toggleMicrophoneActiveButton.bind(this);
        this.togglePersonActiveButton = this.togglePersonActiveButton.bind(this);
    }

    toggleStatsActiveButton() {
      this.setState({
          statsActive: true,
          microphoneActive: false,
          personActive: false
      });
    }

    toggleMicrophoneActiveButton() {
      this.setState({
          statsActive: false,
          microphoneActive: true,
          personActive: false
      });
    }

    togglePersonActiveButton() {
      this.setState({
          statsActive: false,
          microphoneActive: false,
          personActive: true
      });
    }

    componentWillMount() {
      // Get random background image
      let imageId = Math.floor(Math.random() * 24) + 1;
      this.setState({imageId});
      store.dispatch(getImageId(imageId));
    }

    componentDidMount() {
      // Get random quote
      store.dispatch(fetchAQuote());

      // Make post request to send average data to Watson API
      const userId = this.props.user.id;

      // EI: add more documentation here (Optimistic loading of averages here), abstract http request logic away?
      axios.post(`https://watson-backend.herokuapp.com/api/users/${userId}/weekrecordings/average`)
      .then(response => console.log('weekly avg', response.data))
      .catch(err => console.error('failed to post weekly average recordings', err));

      axios.post(`https://watson-backend.herokuapp.com/api/users/${userId}/monthrecordings/average`)
      .then(response => console.log('monthly avg', response.data))
      .catch(err => console.error('failed to post monthly average recordings', err));

      axios.post(`https://watson-backend.herokuapp.com/api/users/${userId}/allrecordings/average`)
      .then(response => console.log('all avg', response.data))
      .catch(err => console.error('failed to post all average recordings', err));
    }

  render() {
    return (
      <View style={ styles.container }>
        <Image source={{ uri: `https://s3.amazonaws.com/watsonapi/images/${this.state.imageId}.jpg`}} style={ styles.img } >
            {this.state.statsActive ? <Charts /> : this.state.microphoneActive ? <Recording /> : <Account /> }
          <Footer style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
            <FooterTab>
              <Button active = { this.state.statsActive }  onPress = {this.toggleStatsActiveButton} > Charts <Icon name='ios-stats'></Icon></Button>
              <Button active = { this.state.microphoneActive } onPress = {this.toggleMicrophoneActiveButton} > Record <Icon name='ios-microphone'></Icon></Button>
              <Button active = { this.state.personActive } onPress = {this.togglePersonActiveButton} > Account <Icon name='ios-person'></Icon></Button>
            </FooterTab>
          </Footer>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)',
    resizeMode: 'cover',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputField: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    color: 'white',
    fontWeight: 'bold'
  },
  login: {
    marginLeft: 20,
    marginRight: 20
  }
});

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Homepage);
