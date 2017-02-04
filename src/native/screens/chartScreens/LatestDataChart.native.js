import React, {Component} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';
import Swiper from 'react-native-swiper';
import { BlurView } from 'react-native-blur';

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
    const personalityLabels = personalityArray.map(obj => obj.quality + ` ${(obj.score * 100).toFixed(1)}%`);
    const toneData = toneArray.sort((a, b) => b.score - a.score).map(obj => {
      return {x: toneCount++, y: obj.score * 100}
    });
    const toneLabels = toneArray.map(obj => obj.quality + ` ${(obj.score * 100).toFixed(1)}%`);

    return (
      <Image source={{uri: `https://s3.amazonaws.com/watsonapi/images/${this.props.imageId}.jpg`}} style={styles.container} >
        <View>
          <Swiper showsButtons={true}>

            <View style={styles.slide}>
              <Text> Personality Insights I </Text>
              <VictoryChart theme={VictoryTheme.material}>
                <VictoryAxis
                  tickValues={[0,20,40,60,80,100]}
                  label='Percentile'
                  style={{axisLabel: { padding: 35 }}}
                />
                <VictoryBar
                  horizontal
                  domain={{x: [0, 100], y: [35, 48]}}
                  labels={personalityLabels.slice(35, 47)}
                  height={500}
                  padding={75}
                  style={{
                    labels: {
                      fontSize: 8
                    },
                    data: {
                      width: 12,
                      fill: (data) => data.x%2==0 ? '#DB9EFF' : '#7FC6FF'
                    }
                   }}
                  data={personalityData.slice(35, 47)}
                />
              </VictoryChart>
              <Text>The scores you see are all percentiles. They are comparing one person to a broader population. For example, a 90% on Extraversion does not mean that the person is 90% extroverted. It means that for that single trait, the person is more extroverted than 90% of the people in the population.</Text>
            </View>

            <View style={styles.slide}>
              <Text> Personality Insights II </Text>
              <VictoryChart theme={VictoryTheme.material}>
                <VictoryAxis
                  tickValues={[0,20,40,60,80,100]}
                  label='Percentile'
                  style={{axisLabel: { padding: 35 }}}
                />
                <VictoryBar
                  horizontal
                  domain={{x: [0, 100], y: [24, 36]}}
                  labels={personalityLabels.slice(24, 35)}
                  height={1000}
                  padding={75}
                  style={{
                    labels: {
                     fontSize: 8
                    },
                    data: {
                     width: 8,
                     fill: (data) => data.x%2==0 ? '#DB9EFF' : '#7FC6FF'
                    }
                   }}
                  data={personalityData.slice(24, 35)}
                />
              </VictoryChart>
              <Text>The scores you see are all percentiles. They are comparing one person to a broader population. For example, a 90% on Extraversion does not mean that the person is 90% extroverted. It means that for that single trait, the person is more extroverted than 90% of the people in the population.</Text>
            </View>

            <View style={styles.slide}>
              <Text> Personality Insights III </Text>
              <VictoryChart theme={VictoryTheme.material}>
                <VictoryAxis
                  tickValues={[0,20,40,60,80,100]}
                  label='Percentile'
                  style={{axisLabel: { padding: 35 }}}
                />
                <VictoryBar
                  horizontal
                  domain={{x: [0, 100], y: [12, 26]}}
                  labels={personalityLabels.slice(12, 24)}
                  height={1000}
                  padding={75}
                  style={{
                    labels: {
                      fontSize: 8
                    },
                    data: {
                      width: 8,
                      fill: (data) => data.x%2==0 ?'#DB9EFF' : '#7FC6FF'
                    }
                  }}
                  data={personalityData.slice(12, 24)}
                />
              </VictoryChart>
              <Text>The scores you see are all percentiles. They are comparing one person to a broader population. For example, a 90% on Extraversion does not mean that the person is 90% extroverted. It means that for that single trait, the person is more extroverted than 90% of the people in the population.</Text>
            </View>

            <View style={styles.slide}>
              <Text> Personality Insights IV </Text>
              <VictoryChart theme={VictoryTheme.material}>
                <VictoryAxis
                  tickValues={[0,20,40,60,80,100]}
                  label='Percentile'
                  style={{axisLabel: { padding: 35 }}}
                />
                <VictoryBar
                  horizontal
                  domain={{x: [0, 120], y: [0, 14]}}
                  labels={personalityLabels.slice(0, 12)}
                  height={1000}
                  padding={75}
                  style={{
                    labels: {
                      fontSize: 8
                    },
                    data: {
                      width: 8,
                      fill: (data) => data.x%2==0 ? '#DB9EFF' : '#7FC6FF'
                    }
                  }}
                  data={personalityData.slice(0, 12)}
                />
              </VictoryChart>
              <Text>The scores you see are all percentiles. They are comparing one person to a broader population. For example, a 90% on Extraversion does not mean that the person is 90% extroverted. It means that for that single trait, the person is more extroverted than 90% of the people in the population.</Text>
            </View>

            <View style={styles.slide}>
              <Text> Tone Analysis </Text>
              <VictoryChart theme={VictoryTheme.material}>
                <VictoryAxis
                  tickValues={[0,20,40,60,80,100]}
                  label='Percentile'
                  style={{axisLabel: { padding: 35 }}}
                />
                <VictoryBar
                  horizontal
                  domain={{x: [0, 100], y: [0, 14]}}
                  labels={toneLabels}
                  height={1000}
                  padding={10}
                  style={{
                    labels: {
                      fontSize: 8
                    },
                    data: {
                      width: 8,
                      fill: (data) => data.x%2==0 ? '#DB9EFF' : '#7FC6FF'
                    }
                  }}
                  data={toneData}
                />
              </VictoryChart>
              <Text>Some tonal description</Text>
            </View>

          </Swiper>
        </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    opacity: 0.85,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    imageId: state.admin.imageId,
    recordings: state.recordings.latestRecordings
  };
};

export default connect(mapStateToProps)(LatestDataChart);
