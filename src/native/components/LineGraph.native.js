import React from 'react';
import { View } from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryLabel, VictoryAxis } from 'victory-native';
import { colorArray } from '../utils/chart';


export default LineGraph = ({start, end, type, xAxisLength}) => {

  const graphLines = (typeOfTraitArray, color = colorArray) => {
    const output = [];
    for (let i = start; i <= end; i++) {
      output.push(
        <VictoryLine
        key={i}
        data={typeOfTraitArray[i].value}
        domain={{y: [0, 110], x: [0, typeOfTraitArray[i].value.length + xAxisLength]}}
        x="date"
        y={(datum) => datum.score * 100}
        style={{
          data: {stroke: color[i]},
          labels: {fontSize: 12, fill: 'white'}
        }}
        labelComponent={<VictoryLabel/>}
        />
      )
    } return output;
  };

  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryAxis
        tickFormat={[]}
        tickCount={1}
         style={{
           axis: {stroke: 'white'},
           axisLabel: {
             padding: 35,
             fill: 'white'
           },
           ticks: {stroke: 'white'},
           tickLabels: {fill: 'white'}
         }
        }
       />
       <VictoryAxis
        dependentAxis
        tickValues={[0,20,40,60,80,100]}
        style={{
          axis: {stroke: 'white'},
          axisLabel: {
            padding: 35,
            fill: 'white'
          },
          ticks: {stroke: 'white'},
          tickLabels: {fill: 'white'}
        }
       }
      />
      { graphLines(type) }
    </VictoryChart>
  )
}


