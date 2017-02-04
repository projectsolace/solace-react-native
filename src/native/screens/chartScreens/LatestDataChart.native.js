import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';
import Swiper from 'react-native-swiper';

class LatestDataChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const personalityArray = this.props.recordings.personality;
    const toneArray = this.props.recordings.tone;

    let count = 1;
    let toneCount = 1;
    const personalityData = personalityArray.sort((a, b) => b.score - a.score).map(obj => {
      return {x: count++, y: obj.score * 100}
    });
    const personalityLabels = personalityArray.map(obj => obj.quality + ` ${(obj.score * 100).toFixed(2)}%`);
    const toneData = toneArray.sort((a, b) => b.score - a.score).map(obj => {
      return {x: toneCount++, y: obj.score * 100}
    });
    const toneLabels = toneArray.map(obj => obj.quality + ` ${(obj.score * 100).toFixed(2)}%`);

    return (
      <View style={styles.container}>
             <Swiper style={styles.wrapper} showsButtons={true}>

               <View style={styles.slide}>
                 <VictoryChart>
                 <VictoryAxis
                 tickValues={[0,20,40,60,80,100]}
                 label='Percentile'
                 />
                   <VictoryBar
                    horizontal
                    domain={{x: [0, 100], y: [35, 48]}}
                    labels={personalityLabels.slice(35, 47)}
                    height={500}
                    padding={75}
                    style={{
                     labels: {
                      fontSize: 5
                     },
                     data: {
                      width: 12,
                      fill: (data) => data.x%2==0 ? 'blue' : 'tomato'
                     }
                     }}
                    data={personalityData.slice(35, 47)}

                   />
                 </VictoryChart>
                 <Text> The scores you see are all percentiles. They are comparing one person to a broader population. For example, a 90% on Extraversion does not mean that the person is 90% extroverted. It means that for that single trait, the person is more extroverted than 90% of the people in the population. </Text>
               </View>

               <View style={styles.slide}>
                 <VictoryChart>
                   <VictoryBar
                    horizontal
                    domain={{x: [0, 100], y: [24, 36]}}
                    labels={personalityLabels.slice(24, 35)}
                    height={1000}
                    padding={75}
                    style={{
                     labels: {
                      fontSize: 5
                     },
                     data: {
                      width: 8,
                      fill: (data) => data.x%2==0 ? 'blue' : 'tomato'
                     }
                     }}
                    data={personalityData.slice(24, 35)}
                   />
                 </VictoryChart>
               </View>

               <View style={styles.slide}>
                 <VictoryChart>
                     <VictoryBar
                      horizontal
                      domain={{x: [0, 100], y: [12, 26]}}
                      labels={personalityLabels.slice(12, 24)}
                      height={1000}
                      padding={75}
                      style={{
                       labels: {
                         fontSize:5
                       },
                       data: {
                         width: 8,
                         fill: (data) => data.x%2==0 ?'blue' : 'tomato'
                       }
                      }}
                      data={personalityData.slice(12, 24)}

                     />
                 </VictoryChart>
               </View>

               <View style={styles.slide}>
                 <VictoryChart
                 theme={VictoryTheme.material}
                 domainPadding={40}
                 >
                   <VictoryBar
                    horizontal
                    domain={{x: [0, 100], y: [1, 14]}}
                    labels={personalityLabels.slice(0, 12)}
                    height={1000}
                    padding={75}
                    style={{
                     labels: {
                      fontSize:6.5
                     },
                     data: {
                      width: 8,
                      fill: (data) => data.x%2==0 ? 'blue' : 'tomato'
                     }
                    }}
                    data={personalityData.slice(0, 12)}
                   />
                 </VictoryChart>
               </View>

               <View style={styles.slide}>
                 <VictoryChart>
                   <VictoryBar
                    horizontal
                    domain={{x: [0, 100], y: [0, 14]}}
                    labels={toneLabels}
                    height={1000}
                    padding={10}
                    style={{
                     labels: {
                      fontSize: 5
                     },
                     data: {
                      width: 8,
                      fill: (data) => data.x%2==0 ? 'blue' : 'tomato'
                     }
                    }}
                    data={toneData}
                   />
                 </VictoryChart>
               </View>

             </Swiper>
           </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'background-color: rgba(0, 0, 255, 0.1)',
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    recordings: state.recordings.latestRecordings
  };
};

export default connect(mapStateToProps)(LatestDataChart);
