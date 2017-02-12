import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { BlurView } from 'react-native-blur';
import Swiper from 'react-native-swiper';
import { filterTraits, personality, emotional, language, social } from '../utils/chart';
import Legend from './Legend.native';
import LineGraph from './LineGraph.native';
import InfoButton from './Info.native';
import CloseButton from './Close.native';
import { personalityTitles } from '../utils/chart';

export default Graphs = ({start, end, type}) => {
  //type an array of objects thats either the personality or tone; titles is an array of graph titles
  const createGraphs = (startIndex, endIndex) => {
    const output = [];
    let count = 0;
    for (let i = start; i <= endIndex; i += 3) {
      output.push(
        <ScrollView maximumZoomScale={3} key={i}>
          <View style={styles.slide}>
            <CloseButton/>
            <Text style={styles.title}>{ personalityTitles[count] }</Text>
            <LineGraph start={i} end={i + 2} type={ type }/>
            <Legend start={i} end={i + 2} type={ type }/>
            <InfoButton info={ personality }/>
          </View>
        </ScrollView>
      )
      count++;
    } return output;
  }

  return (
  <Swiper showsButtons={true}>
    {createGraphs(start, end)}
  </Swiper>
  )
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'helvetica'
  }
});
