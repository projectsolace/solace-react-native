import React from 'react';
import { View, Text } from 'react-native';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryLabel, VictoryAxis } from 'victory-native';
import { colorArray } from '../utils/chart';


export default BarGraph = ({data, labels, range, axisLength}) => {  //data and labels are arrays of objects

  const dataRange = (type, numRange) => {
    numRange = numRange.split('-');
    return type.slice(+numRange[0], +numRange[1]);
  };

  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryAxis
        tickValues={[0,20,40,60,80,100]}
        style={{
          axis: {stroke: 'white'},
          axisLabel: {
            padding: 35,
            fill: 'white'
          },
          ticks: {
            stroke: 'white'
          },
          tickLabels: {
            fill: 'white'
          }
        }}
      />
      <VictoryBar
        horizontal
        domain={axisLength}
        labels={range ? dataRange(labels, range) : labels}
        height={1000}
        padding={75}
        style={{
          labels: {
            fontSize: 12,
            fill: 'white'
          },
          data: {
            width: 8,
            fill: (data) => colorArray[data.x - 1]
          }
        }}
        data={range ? dataRange(data, range) : data}
      />
    </VictoryChart>
  )
}

