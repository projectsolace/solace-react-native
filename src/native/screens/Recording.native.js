import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, InputGroup, Input, Icon, Button, Container, Footer, FooterTab } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import { RNS3 } from 'react-native-aws3';
import axios from 'axios'
import secrets from './secrets.json';
import {connect} from 'react-redux'



let audioPath = AudioUtils.DocumentDirectoryPath + '/watson2.wav';

AudioRecorder.prepareRecordingAtPath(audioPath, {
  SampleRate: 22050,
  Channels: 1,
  AudioQuality: "Low",
  AudioEncoding: "lpcm"
});
console.log('where are audioPath', audioPath)

class Recording extends Component {

    constructor(props, context) {
        super(props, context);

    }

  render() {

    const onStartRecord = () => {
      console.log('STARTED RECORDING')
      AudioRecorder.startRecording();
      Actions.questionModal();
    };

    const onStartRecordFreeSpeak = () => {
      console.log('STARTED FEE RECORDING')
      AudioRecorder.startRecording();
      Actions.freeSpeakModal();
    };

    const onStopRecord = () => {
      AudioRecorder.stopRecording();
      console.log('STOPPED RECORDING')
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

      RNS3.put(file, options)
      .then(response => {
          if (response.status !== 201) throw new Error("Failed to upload audio to S3");
          console.log(response.body.postResponse.location);
          return axios.post('http://localhost:1337/api/watson/', {userID:this.props.user.id}).then(function(resp){
            console.log(resp.data)
          })
      })
      .catch(err => console.log(err));

    };

    return (
      <View>
          <Button info style={{alignSelf: 'center'}} onPress = { onStartRecord } > Start Record </Button>
          <Button danger style={{alignSelf: 'center'}} onPress = { onStopRecord } > Stop Record </Button>
          <Button info style={{alignSelf: 'center'}} onPress = { onStartRecordFreeSpeak } > Speak Your Mind Freely </Button>
          <Button info style={{alignSelf: 'center'}} onPress={()=> Actions.questionModal()} > Today's Questions </Button>
      </View>
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
  }
});



/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Recording);
