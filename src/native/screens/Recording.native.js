import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, InputGroup, Input, Icon, Button, Container, Footer, FooterTab } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import { RNS3 } from 'react-native-aws3';
import axios from 'axios'
import secrets from './secrets.json';
import {connect} from 'react-redux'
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'



let audioPath = AudioUtils.DocumentDirectoryPath + '/watson2.wav';

AudioRecorder.prepareRecordingAtPath(audioPath, {
  SampleRate: 22050,
  Channels: 1,
  AudioQuality: "Low",
  AudioEncoding: "lpcm"
});
console.log('where are audioPath', audioPath)

class Recording extends Component {

    // Stop Watch
   // <View style={styles.timer}>
   //              <Stopwatch options={optionsA} start={this.state.stopwatchStart} reset={this.state.stopwatchReset}/>
   //          </View>

    constructor(props, context) {
        super(props, context);
        this.state={
          recording:false,
          stopwatchStart: false,
          totalDuration: 90000,
          stopwatchReset: false,
        }

    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);

    }


    toggleStopwatch() {
      this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
    }

    resetStopwatch() {
      this.setState({stopwatchStart: false, stopwatchReset: true});
    }


  render() {
    // hello


    const onStartRecord = () => {
      console.log('STARTED RECORDING')
      AudioRecorder.startRecording();
      this.setState({recording:true})
      this.toggleStopwatch()

    };

    const recordingMic = () =>{
      return (
          <View>
          <TouchableOpacity onPress={onStartRecord} style={styles.image2}>
           <Image source={require('../../images/mic.png')} style={styles.image2}/>
           </TouchableOpacity>
           <View style={styles.phantom}>
           </View>
           </View>
           )
    }

     const stopMic = () =>{
      return (
          <View>
          <TouchableOpacity onPress={onStopRecord} style={styles.image3}>
           <Image source={require('../../images/stopmic.png')} style={styles.image3}/>
           </TouchableOpacity>
           <View style={styles.phantom2}>
           </View>
           </View>
           )
    }

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
      this.resetStopwatch()
      this.toggleStopwatch()
      this.setState({recording:false})

    };

    return (
      <View>
        <Image source={require('../../images/solace.png')} style={styles.image}/>
          <Text style={styles.text}> {`Hello ${this.props.user.firstName}, \n What's on your mind today?`}</Text>
            {!this.state.recording ? recordingMic(): stopMic()}
          <Text style={styles.text}> {`"${this.props.quote.quote}"`}</Text>
          <Button transparent style={{alignSelf: 'center', marginTop: 25, borderWidth: 1}} onPress={()=> Actions.questionModal()} >
           <Text style={{fontWeight: 'bold', color: 'white'}}> Helpful Questions </Text>
          </Button>
      </View>
    );
  }
}

const handleTimerComplete = () => alert("custom completion function");

const optionsA = {
  container: {
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 20,
    borderRadius: 5,
    width: 175,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)',
    resizeMode: 'stretch'
  },
  image: {
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 50

  },
  image2: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  image3: {
    marginTop: 9,
    height: 67,
    width: 67,
    alignSelf: 'center'
  },
  text: {
  alignSelf: 'center',
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowRadius: 7,
  shadowOpacity: 1.0,
  marginBottom: 10
  },
  text2: {
    alignSelf: 'center',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
   },
   shadowRadius: 5,
   shadowOpacity: 1.0
  },
  phantom: {
    height: 100
  },
  phantom2: {
    height: 124
  },
  timer: {
    alignSelf: 'center',
  }
});

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    user: state.user,
    quote:state.quote
  };
};

export default connect(mapStateToProps)(Recording);
