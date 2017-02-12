import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryLabel, VictoryAxis, Line } from 'victory-native';
import Swiper from 'react-native-swiper';
import { BlurView } from 'react-native-blur';
import { Actions } from 'react-native-router-flux';
import { filterTraits, personality, emotional, language, social, personalityTitles } from '../../utils/chart';
import Legend from '../../components/Legend.native';
import LineGraph from '../../components/LineGraph.native';
import InfoButton from '../../components/Info.native';
import CloseButton from '../../components/Close.native';
import LineGraphSlides from '../../components/TotalGraphs.native';

const MonthlyTotalChart = ({ imageId, personalityArray, toneArray }) => {
  return (
    <Image source={{uri: `https://s3.amazonaws.com/watsonapi/images/${imageId}.jpg`}} style={styles.img} >
      <BlurView blurType="light" blurAmount={50} style={styles.container}>
        <View style={styles.container}>
          <LineGraphSlides start={0} end={14} type={personalityArray} />
        </View>
      </BlurView>
    </Image>
  )
}


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
  },
  blurContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
    paddingHorizontal: 10
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'helvetica'
  }
});

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ recordings, admin }) => {
  const monthlyPersonalityTraits = recordings.monthlyTotalRecordings.personality;
  const personalityArray = filterTraits(monthlyPersonalityTraits);

  return {
    personalityArray,
    toneArray: recordings.monthlyTotalRecordings.tone,
    imageId: admin.imageId
  };
};

export default connect(mapStateToProps)(MonthlyTotalChart);
         /*   <ScrollView maximumZoomScale={3}>
              <View style={styles.slide}>
                <CloseButton/>
                <Text style={styles.title}> Emotional Tone Insights Monthly I</Text>
                <LineGraph start={0} end={2} type={toneArray}/>
                <Legend start={0} end={2} type={toneArray}/>
                <InfoButton info={emotional}/>
              </View>
            </ScrollView>
            <ScrollView maximumZoomScale={3}>
              <View style={styles.slide}>
                <CloseButton/>
                <Text style={styles.title}> Emotional Tone Insights Monthly II </Text>
                <LineGraph start={3} end={4} type={toneArray}/>
                <Legend start={3} end={4} type={toneArray}/>
                <InfoButton info={emotional} space={25}/>
              </View>
            </ScrollView>
            <ScrollView maximumZoomScale={3}>
              <View style={styles.slide}>
                <CloseButton/>
                <Text style={styles.title}> Language Tone Insights Monthly </Text>
                <LineGraph start={5} end={7} type={toneArray}/>
                <Legend start={5} end={7} type={toneArray}/>
                <InfoButton info={language}/>
              </View>
            </ScrollView>
            <ScrollView maximumZoomScale={3}>
              <View style={styles.slide}>
                <CloseButton/>
                <Text style={styles.title}> Social Tone Insights Monthly I </Text>
                <LineGraph start={8} end={10} type={toneArray}/>
                <Legend start={8} end={10} type={toneArray}/>
                <InfoButton info={social}/>
              </View>
            </ScrollView>
            <ScrollView maximumZoomScale={3}>
              <View style={styles.slide}>
                <CloseButton/>
                <Text style={styles.title}> Social Tone Insights Monthly II </Text>
                <LineGraph start={11} end={12} type={toneArray}/>
                <Legend start={11} end={12} type={toneArray}/>
                <InfoButton info={social} space={25}/>
              </View>
            </ScrollView>
*/
