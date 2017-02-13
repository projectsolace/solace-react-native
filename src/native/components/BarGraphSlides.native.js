import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { personality, tone, barDomainCoords, barGraphTitles, personalityDataRange } from '../utils/chart';
import BarGraph from './BarGraph.native';
import InfoButton from './Info.native';
import CloseButton from './Close.native';
import { personalityTitles, toneTitles } from '../utils/chart';


export default BarGraphSlides = ({personalityData, personalityLabels, toneData, toneLabels}) => {

  const generateSlides = () => {
    const output = [];
    for (let i = 0; i <= 4; i++) {
      let data = personalityData;
      let labels = personalityLabels;
      if (i === 4) {
        data = toneData;
        labels = toneLabels;
      }
      output.push(
        <ScrollView maximumZoomScale={3} key={i}>
          <View style={styles.slide}>
            <CloseButton />
            <Text style={styles.title}>{barGraphTitles[i]}</Text>
            <BarGraph data={data} labels={labels} range={i < 4 ? personalityDataRange[i] : ''} axisLength={barDomainCoords[i]}/>
            <InfoButton space={25} info={i < 4 ? personality : tone}/>
          </View>
        </ScrollView>
      )
    } return output;
  };

  return (
    <Swiper showsButtons={true}>
      { generateSlides() }
    </Swiper>
  );
}

const styles = StyleSheet.create({
  slide: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
  },
  title: {
  color: 'white',
  fontSize: 18
  }
});
