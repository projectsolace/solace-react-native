import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, InputGroup, Input, Icon, Button, Container } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import { RNS3 } from 'react-native-aws3';
import axios from 'axios'
import secrets from './secrets.json'


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
        AudioRecorder.stopRecording();
        let file = {
          // `uri` can also be a file system path (i.e. file://)
          uri: audioPath,
          name: "test.wav",
          type: "audio/wav"
        }
        let options = {
          keyPrefix: "/",
          bucket: "watsonapi",
          region: "us-east-1",
          accessKey: secrets.keyA,
          secretKey: secrets.keyB,
          successActionStatus: 201
        }

        RNS3.put(file, options).then(response => {
            if (response.status !== 201) throw new Error("Failed to upload audio to S3");
            console.log(response.body.postResponse.location);
            axios.get('http://localhost:1337/api/watson/').then(function(resp){
              console.log(resp.data)
            })
        });


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
