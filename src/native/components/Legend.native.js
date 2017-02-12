import React from 'react';
import { View, Text } from 'react-native';
import { colorArray } from '../utils/chart';

export default Legend = ({start, end, type}) => {
  function descriptions() {
    var output = [];
    for (var i = start; i <= end; i++) {
      output.push(
        <View key={i} style={{flexDirection: 'row'}}>
          <View style={{height: 15, width: 15, alignSelf: 'center', backgroundColor: colorArray[i]}} />
          <Text style={{margin: 5, fontFamily: 'helvetica', color: 'white'}}>{type[i].key}</Text>
        </View>
      )
    } return output;
  }
  return (
    <View style={{flexDirection: 'column'}}>
      {descriptions()}
    </View>
  );
};
