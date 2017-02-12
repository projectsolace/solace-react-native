import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { BlurView } from 'react-native-blur';
import Swiper from 'react-native-swiper';
import { personality, emotional, language, social } from '../utils/chart';
import Legend from './Legend.native';
import LineGraph from './LineGraph.native';
import InfoButton from './Info.native';
import CloseButton from './Close.native';
import { personalityTitles, toneTitles } from '../utils/chart';

export default Graphs = ({personalityArray, toneArray}) => {
  //type an array of objects thats either the personality or tone; titles is an array of graph titles; start & end are 0, 14
  const personalityGraph = () => {
    const output = [];
    let count = 0;
    for (let i = 0; i <= 14; i += 3) {  // 0-14 represents the amount of personality traits that are represented
      output.push(
        <ScrollView maximumZoomScale={3} key={i}>
          <View style={styles.slide}>
            <CloseButton/>
            <Text style={styles.title}>{ personalityTitles[count] }</Text>
            <LineGraph start={i} end={i + 2} type={ personalityArray }/>
            <Legend start={i} end={i + 2} type={ personalityArray }/>
            <InfoButton info={ personality }/>
          </View>
        </ScrollView>
      )
      count++;
    } return output;
  }

  const toneGraph = (trait = emotional) => {
    const output = [];
    let count = 0;
    for (let i = 0; i <= 12; i += 3) {
      let endPoint = i + 2;
      if (count === 2) trait = language;
      if (count > 2) trait = social;
      if (count === 1 || count === 4) endPoint = i + 1; // this condition deals with graphs that have only 2 comparisons
      output.push(
        <ScrollView maximumZoomScale={3} key={i}>
          <View style={styles.slide}>
            <CloseButton/>
            <Text style={styles.title}>{ toneTitles[count] }</Text>
            <LineGraph start={i} end={ endPoint } type={ toneArray }/>
            <Legend start={i} end={ endPoint } type={ toneArray }/>
            <InfoButton info={ trait } space={count === 1 || count === 4 ? 25 : 10}/>
          </View>
        </ScrollView>
      )
      if (count === 1 || count === 4) i -= 1;
      count++;
    } return output;
  }

  const slides = personalityGraph().concat(toneGraph());

  return (
    <Swiper showsButtons={true}>
      { slides }
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
