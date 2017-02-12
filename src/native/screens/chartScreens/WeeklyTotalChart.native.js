import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { connect } from 'react-redux';
import { BlurView } from 'react-native-blur';
import { filterTraits } from '../../utils/chart';
import LineGraphSlides from '../../components/LineGraphSlides.native';


const WeeklyTotalChart = ({ personalityArray, toneArray, imageId }) => {

  return (
    <Image source={{uri: `https://s3.amazonaws.com/watsonapi/images/${imageId}.jpg`}} style={styles.img} >
      <BlurView blurType="light" blurAmount={50} style={styles.container}>
        <View style={styles.container}>
          <LineGraphSlides personalityArray={personalityArray} toneArray={toneArray} xAxisLength={2}/>
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
  const weeklyPersonalityRecordings = recordings.weeklyTotalRecordings.personality;
  const personalityArray = filterTraits(weeklyPersonalityRecordings);

  return {
    personalityArray,
    toneArray: recordings.weeklyTotalRecordings.tone,
    imageId: admin.imageId
  };
};

export default connect(mapStateToProps)(WeeklyTotalChart);
