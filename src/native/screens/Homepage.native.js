import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, InputGroup, Input, Icon, Button, Container } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {AudioRecorder, AudioUtils} from 'react-native-audio';


let audioPath = AudioUtils.DocumentDirectoryPath + '/watson2.wav';

AudioRecorder.prepareRecordingAtPath(audioPath, {
  SampleRate: 22050,
  Channels: 1,
  AudioQuality: "Low",
  AudioEncoding: "lpcm"
});
console.log("Here are AudioRecorder", AudioRecorder);
console.log('where are audioPath', audioPath)


export default class Homepage extends Component {

    constructor(props, context) {
        super(props, context);

    }

  render() {

    const onStartRecord = () => {
      AudioRecorder.startRecording();
    };

     const onStopRecord = () => {
        AudioRecorder.startRecording();
    };

    return (
      <Image source={ require('../../../images/sky.jpeg')} style={ styles.container } >
        <Container style={styles.content}>
          <Content>
              <Button style={{alignSelf: 'center'}}>
                You've made it
              </Button>
              <Button info style={{alignSelf: 'center'}} onPress = { onStartRecord } > Start Record </Button>
              <Button danger style={{alignSelf: 'center'}} onPress = { onStopRecord } > Stop Record </Button>
          </Content>
        </Container>
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
