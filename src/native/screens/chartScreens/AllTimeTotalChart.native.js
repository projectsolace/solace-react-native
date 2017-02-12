import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import { VictoryChart, VictoryLine,  VictoryTheme, VictoryLabel, VictoryAxis } from 'victory-native';
import Swiper from 'react-native-swiper';
import { BlurView } from 'react-native-blur';
import { Actions } from 'react-native-router-flux';
import LineGraphSlides from '../../components/LineGraphSlides.native';
import { filterTraits } from '../../utils/chart';


const AllTimeTotalChart = ({ personalityArray, toneArray, imageId }) => {

  return (
    <Image source={{uri: `https://s3.amazonaws.com/watsonapi/images/${imageId}.jpg`}} style={styles.img} >
      <BlurView blurType="light" blurAmount={50} style={styles.container}>
        <View style={styles.container}>
          <LineGraphSlides personalityArray={personalityArray} toneArray={toneArray} xAxisLength={5}/>
        </View>
      </BlurView>
    </Image>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'transparent'
  },
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
  }
});


/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ recordings, admin }) => {
  const allTimePersonalityRecords = recordings.allTotalRecordings.personality;
  const personalityArray = filterTraits(allTimePersonalityRecords);

  return {
    personalityArray,
    toneArray: recordings.allTotalRecordings.tone,
    imageId: admin.imageId
  };
};

export default connect(mapStateToProps)(AllTimeTotalChart);
