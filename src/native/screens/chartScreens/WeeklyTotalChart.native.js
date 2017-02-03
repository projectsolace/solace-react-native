import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { VictoryBar, VictoryChart } from 'victory-native';
import Swiper from 'react-native-swiper';

class WeeklyTotalChart extends Component {
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
    const personalityLabels = personalityArray.map(obj => obj.quality + `${(obj.score * 100).toFixed(2)}%`);
    const toneData = toneArray.sort((a, b) => b.score - a.score).map(obj => {
      return {x: toneCount++, y: obj.score * 100}
    });
    const toneLabels = toneArray.map(obj => obj.quality + `${(obj.score * 100).toFixed(2)}%`);

    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} showsButtons={true}>

          <View style={styles.slide}>
            <VictoryChart>
              <VictoryBar
               horizontal
               domain={{x: [0, 100]}}
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
          </View>

          <View style={styles.slide}>
            <VictoryChart>
              <VictoryBar
               horizontal
               domain={{x: [0, 100]}}
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
                 domain={{x: [0, 100]}}
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
            <VictoryChart>
              <VictoryBar
               horizontal
               domain={{x: [0, 100]}}
               labels={personalityLabels.slice(0, 12)}
               height={1000}
               padding={75}
               style={{
                labels: {
                 fontSize:5
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
               domain={{x: [0, 100]}}
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
    backgroundColor: 'white',
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
    recordings: state.recordings.weeklyTotalRecordings
  };
};

export default connect(mapStateToProps)(WeeklyTotalChart);
