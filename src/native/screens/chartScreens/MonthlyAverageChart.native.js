import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';
import Swiper from 'react-native-swiper';
import { BlurView } from 'react-native-blur';
import { Actions } from 'react-native-router-flux';

class MonthlyAverageChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const infoButton =
      (<TouchableOpacity
        style={{ marginTop: 25}}
        onPress={() => Alert.alert(
         '',
         'The scores you see are all percentiles. They are comparing you to the broader population. For example, a 90% on Extraversion does not mean that you are 90% extroverted. It means that for that single trait, you are more extroverted than 90% of the people in the population.'
       )}>
        <View style={styles.info}>
         <Icon name="ios-information-circle-outline" style={{color: 'white'}} />
       </View>
      </TouchableOpacity>
    );

    const closeButton =
      (<TouchableOpacity onPress={Actions.pop}>
         <View style={styles.closeButton}>
           <Icon name="ios-close-circle-outline" style={{fontSize: 30, color: 'white', textAlign: 'right'}} />
         </View>
       </TouchableOpacity>);

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
    const { imageId } = this.props;

           return (
      <Image source={{uri: `https://s3.amazonaws.com/watsonapi/images/${imageId}.jpg`}} style={styles.img} >
        <BlurView blurType="light" blurAmount={50} style={styles.container}>
          <View style={styles.container}>
            <Swiper showsButtons={true}>
              <ScrollView maximumZoomScale={3}>
              <View style={styles.slide}>
                { closeButton }
                <Text style={styles.title}> Personality Insights I </Text>
                <VictoryChart theme={VictoryTheme.material}>
                 <VictoryAxis
                    tickValues={[0,20,40,60,80,100]}
                    style={{
                      axis: {stroke: "white"},
                      axisLabel: {
                        padding: 35,
                        fill: 'white'
                      },
                      ticks: {stroke: "white"},
                      tickLabels: {fill: 'white'}
                    }
                   }
                  />
                  <VictoryBar
                    horizontal
                    domain={{x: [0, 100], y: [35, 48]}}
                    labels={personalityLabels.slice(35, 47)}
                    height={500}
                    padding={75}
                    style={{
                      labels: {
                        fontSize: 8,
                        fill: 'white'
                      },
                      data: {
                        width: 12,
                         fill: (data) => {return [ '#7D26CD','#0000EE','#6495ED','#68228B','#E6E6FA','#104E8B','#B0C4DE','#0000FF','#5D478B','#1E90FF','#F0F8FF','#AB82FF','#836FFF','#9932CC','#F8F8FF','#BCD2EE','#6E7B8B','#191970','#6A5ACD','#0000CD','#9A32CD','#B23AEE','#7A67EE','#6C7B8B','#9370DB','#7B68EE','#473C8B','#000080','#D15FEE','#9F79EE','#BA55D3','#4B0082','#778899','#4682B4','#483D8B','#3A5FCD','#7A378B','#8A2BE2','#4169E1','#63B8FF','#8470FF','#800080','#A2B5CD','#27408B','#9400D3','#1874CD','#551A8B' ][data.x-1] }
                      }
                     }}
                    data={personalityData.slice(35, 47)}
                  />
                </VictoryChart>
               { infoButton }
              </View>
              </ScrollView>
              <ScrollView maximumZoomScale={3}>
              <View style={styles.slide}>
                { closeButton }
                <Text style={styles.title}> Personality Insights II </Text>
                <VictoryChart theme={VictoryTheme.material}>
                 <VictoryAxis
                    tickValues={[0,20,40,60,80,100]}
                    style={{
                      axis: {stroke: "white"},
                      axisLabel: {
                        padding: 35,
                        fill: 'white'
                      },
                      ticks: {stroke: "white"},
                      tickLabels: {fill: 'white'}
                    }
                   }
                  />
                  <VictoryBar
                    horizontal
                    domain={{x: [0, 100], y: [24, 36]}}
                    labels={personalityLabels.slice(24, 35)}
                    height={1000}
                    padding={75}
                    style={{
                      labels: {
                       fontSize: 8,
                       fill: 'white'
                      },
                      data: {
                       width: 8,
                       fill: (data) => {return [ '#7D26CD','#0000EE','#6495ED','#68228B','#E6E6FA','#104E8B','#B0C4DE','#0000FF','#5D478B','#1E90FF','#F0F8FF','#AB82FF','#836FFF','#9932CC','#F8F8FF','#BCD2EE','#6E7B8B','#191970','#6A5ACD','#0000CD','#9A32CD','#B23AEE','#7A67EE','#6C7B8B','#9370DB','#7B68EE','#473C8B','#000080','#D15FEE','#9F79EE','#BA55D3','#4B0082','#778899','#4682B4','#483D8B','#3A5FCD','#7A378B','#8A2BE2','#4169E1','#63B8FF','#8470FF','#800080','#A2B5CD','#27408B','#9400D3','#1874CD','#551A8B' ][data.x-1] }
                      }
                     }}
                    data={personalityData.slice(24, 35)}
                  />
                </VictoryChart>
               { infoButton }
              </View>
              </ScrollView>
              <ScrollView maximumZoomScale={3}>
              <View style={styles.slide}>
                { closeButton }
                <Text style={styles.title}> Personality Insights III </Text>
                <VictoryChart theme={VictoryTheme.material}>
                 <VictoryAxis
                    tickValues={[0,20,40,60,80,100]}
                    style={{
                      axis: {stroke: "white"},
                      axisLabel: {
                        padding: 35,
                        fill: 'white'
                      },
                      ticks: {stroke: "white"},
                      tickLabels: {fill: 'white'}
                    }
                   }
                  />
                  <VictoryBar
                    horizontal
                    domain={{x: [0, 100], y: [12, 26]}}
                    labels={personalityLabels.slice(12, 24)}
                    height={1000}
                    padding={75}
                    style={{
                      labels: {
                        fontSize: 8,
                        fill: 'white'
                      },
                      data: {
                        width: 8,
                         fill: (data) => {return [ '#7D26CD','#0000EE','#6495ED','#68228B','#E6E6FA','#104E8B','#B0C4DE','#0000FF','#5D478B','#1E90FF','#F0F8FF','#AB82FF','#836FFF','#9932CC','#F8F8FF','#BCD2EE','#6E7B8B','#191970','#6A5ACD','#0000CD','#9A32CD','#B23AEE','#7A67EE','#6C7B8B','#9370DB','#7B68EE','#473C8B','#000080','#D15FEE','#9F79EE','#BA55D3','#4B0082','#778899','#4682B4','#483D8B','#3A5FCD','#7A378B','#8A2BE2','#4169E1','#63B8FF','#8470FF','#800080','#A2B5CD','#27408B','#9400D3','#1874CD','#551A8B' ][data.x-1] }
                      }
                    }}
                    data={personalityData.slice(12, 24)}
                  />
                </VictoryChart>
               { infoButton }
              </View>
              </ScrollView>
              <ScrollView maximumZoomScale={3}>
              <View style={styles.slide}>
                { closeButton }
                <Text style={styles.title}> Personality Insights IV </Text>
                <VictoryChart theme={VictoryTheme.material}>
                  <VictoryAxis
                    tickValues={[0,20,40,60,80,100]}
                    style={{
                      axis: {stroke: "white"},
                      axisLabel: {
                        padding: 35,
                        fill: 'white'
                      },
                      ticks: {stroke: "white"},
                      tickLabels: {fill: 'white'}
                    }
                   }
                  />
                  <VictoryBar
                    horizontal
                    domain={{x: [0, 120], y: [0, 14]}}
                    labels={personalityLabels.slice(0, 12)}
                    height={1000}
                    padding={75}
                    style={{
                      labels: {
                        fontSize: 8,
                        fill: 'white'
                      },
                      data: {
                        width: 8,
                         fill: (data) => {return [ '#7D26CD','#0000EE','#6495ED','#68228B','#E6E6FA','#104E8B','#B0C4DE','#0000FF','#5D478B','#1E90FF','#F0F8FF','#AB82FF','#836FFF','#9932CC','#F8F8FF','#BCD2EE','#6E7B8B','#191970','#6A5ACD','#0000CD','#9A32CD','#B23AEE','#7A67EE','#6C7B8B','#9370DB','#7B68EE','#473C8B','#000080','#D15FEE','#9F79EE','#BA55D3','#4B0082','#778899','#4682B4','#483D8B','#3A5FCD','#7A378B','#8A2BE2','#4169E1','#63B8FF','#8470FF','#800080','#A2B5CD','#27408B','#9400D3','#1874CD','#551A8B' ][data.x-1] }
                      }
                    }}
                    data={personalityData.slice(0, 12)}
                  />
                </VictoryChart>
               { infoButton }
              </View>
              </ScrollView>
              <ScrollView maximumZoomScale={3}>
              <View style={styles.slide}>
                { closeButton }
                <Text style={styles.title}> Tone Analysis </Text>
                <VictoryChart theme={VictoryTheme.material}>
                 <VictoryAxis
                    tickValues={[0,20,40,60,80,100]}
                    style={{
                      axis: {stroke: "white"},
                      axisLabel: {
                        padding: 35,
                        fill: 'white'
                      },
                      ticks: {stroke: "white"},
                      tickLabels: {fill: 'white'}
                    }
                   }
                  />
                  <VictoryBar
                    horizontal
                    domain={{x: [0, 120], y: [0, 14]}}
                    labels={toneLabels}
                    height={1000}
                    padding={10}
                    style={{
                      labels: {
                        fontSize: 8,
                        fill: 'white'
                      },
                      data: {
                        width: 8,
                         fill: (data) => {return [ '#7D26CD','#0000EE','#6495ED','#68228B','#E6E6FA','#104E8B','#B0C4DE','#0000FF','#5D478B','#1E90FF','#F0F8FF','#AB82FF','#836FFF','#9932CC','#F8F8FF','#BCD2EE','#6E7B8B','#191970','#6A5ACD','#0000CD','#9A32CD','#B23AEE','#7A67EE','#6C7B8B','#9370DB','#7B68EE','#473C8B','#000080','#D15FEE','#9F79EE','#BA55D3','#4B0082','#778899','#4682B4','#483D8B','#3A5FCD','#7A378B','#8A2BE2','#4169E1','#63B8FF','#8470FF','#800080','#A2B5CD','#27408B','#9400D3','#1874CD','#551A8B' ][data.x-1] }
                      }
                    }}
                    data={toneData}
                  />
                </VictoryChart>
                <TouchableOpacity
                  onPress={() => Alert.alert(
                   '',
                   'For each tone, a score of less than 50% indicates that the tone is unlikely to be perceived in the recorded content. Likewise, a score greater than 75% indicates a high likelihood that the tone will be perceived.'
                 )}>
                  <View style={styles.info}>
                   <Icon name="ios-information-circle-outline" style={{color: 'white'}} />
                 </View>
                </TouchableOpacity>
              </View>
              </ScrollView>
            </Swiper>
          </View>
        </BlurView>
      </Image>
    )
  }
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
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  info: {
    width: 25,
    height: 25
  },
    title: {
    color: 'white',
    fontSize: 18
  },
  closeButton: {
    marginTop: 35,
    marginLeft: 310,
    marginBottom: 50
  }
});
/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    recordings: state.recordings.monthlyAvgRecordings,
    imageId: state.admin.imageId
  };
};

export default connect(mapStateToProps)(MonthlyAverageChart);
