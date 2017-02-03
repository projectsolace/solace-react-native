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
        this.state={
          recording:false
        }

    }

    componentDidMount(){
    }

  render() {


    const onStartRecord = () => {
      console.log('STARTED RECORDING')
      AudioRecorder.startRecording();
      this.setState({recording:true})

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
      this.setState({recording:false})

    };

    return (
      <View>
        <Image source={require('../../images/solace.png')} style={styles.image}/>
          <Text style={styles.text}> {`"${this.props.quote.quote}"`}</Text>
            {!this.state.recording ? recordingMic(): stopMic()}
          <Button transparent style={{alignSelf: 'center', marginTop: 35}} onPress={()=> Actions.questionModal()} >
           <Text style={{fontWeight: 'bold', color: 'white'}}> Helpful Questions </Text>
          </Button>
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
  },
  image: {
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 50

  },
  image2: {
    height:100,
    width:100,
    alignSelf: 'center',
  },
    image3: {
    marginTop: 9,
    height:67,
    width:67,
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
   shadowRadius: 5,
   shadowOpacity: 1.0
  },
  phantom: {
    height: 100
  },
  phantom2: {
    height: 124
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
