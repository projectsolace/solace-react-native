import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryLabel, VictoryAxis, Line } from 'victory-native';
import Swiper from 'react-native-swiper';
import { BlurView } from 'react-native-blur';
import { Actions } from 'react-native-router-flux';
import { filterTraits } from '../../utils/chart';

const colorArray = [ '#7D26CD','#0000EE','#6495ED','#68228B','#c06dff','#104E8B','#B0C4DE','#0000FF','#5D478B','#1E90FF','#F0F8FF','#AB82FF','#836FFF','#9932CC','#BCD2EE','#6E7B8B','#191970','#6A5ACD','#0000CD','#9A32CD','#B23AEE','#7A67EE','#6C7B8B','#9370DB','#7B68EE','#473C8B','#000080','#D15FEE','#9F79EE','#BA55D3','#4B0082','#778899','#4682B4','#483D8B','#3A5FCD','#7A378B','#8A2BE2','#4169E1','#63B8FF','#8470FF','#800080','#A2B5CD','#27408B','#9400D3','#1874CD','#551A8B' ];

class MonthlyTotalChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  let { imageId, personalityArray, toneArray } = this.props;

  function returnLine(index, tone, color = colorArray) {
    personalityArray = tone ? toneArray : personalityArray
    return (
      <VictoryLine
      data={personalityArray[index].value}
      domain={{y: [0, 110], x: [0, personalityArray[index].value.length+5]}}
      x="date"
      y={(datum) => datum.score*100}
      style={{
        data: {stroke: color[index]},
        labels: {fontSize: 12, fill: 'white'}
      }}
      labelComponent={<VictoryLabel/>}
      />
      );
    }

    const createLegend = (indexStart, indexEnd, tone) => {
      personalityArray = tone ? toneArray : personalityArray;
      function setupRows() {
        var output = [];
        for (var i = indexStart; i <= indexEnd; i++) {
          output.push(
            <View key={i} style={{flexDirection: 'row'}}>
              <View style={{height: 15, width: 15, alignSelf: 'center', backgroundColor: colorArray[i]}} />
              <Text style={{margin: 5, fontFamily: 'helvetica', color: 'white'}}>{personalityArray[i].key}</Text>
            </View>
          )
        } return output;
      }
      return (
        <View style={{flexDirection: 'column'}}>
          {setupRows()}
        </View>
      );
    };

    const infoButton = (margin = 10) => {
      return (
        <TouchableOpacity
          style={{ alignSelf: 'center', marginTop: margin}}
          onPress={() => Alert.alert(
           '',
           'The scores you see are all percentiles. They are comparing you to the broader population. For example, a 90% on Extraversion does not mean that you are 90% extroverted. It means that for that single trait, you are more extroverted than 90% of the people in the population.'
         )}>
          <View style={styles.info}>
           <Icon name="ios-information-circle-outline" style={{color: 'white'}} />
         </View>
        </TouchableOpacity>
      );
    }

    const closeButton =
      (<TouchableOpacity onPress={Actions.pop}>
         <View style={styles.closeButton}>
           <Icon name="ios-close-circle-outline" style={{fontSize: 30, color: 'white', textAlign: 'right'}} />
         </View>
       </TouchableOpacity>);

    return (
      <Image source={{uri: `https://s3.amazonaws.com/watsonapi/images/${imageId}.jpg`}} style={styles.img} >
        <BlurView blurType="light" blurAmount={50} style={styles.container}>
          <View style={styles.container}>
            <Swiper showsButtons={true}>
              <ScrollView maximumZoomScale={3}>
              <View style={styles.slide}>
                { closeButton }
                <Text style={styles.title}> Personality Insights Monthly I </Text>
                <VictoryChart
                theme={VictoryTheme.material}
                >
                <VictoryAxis
                  tickComponent={<Line type={"blank"}/>}
                  tickFormat={[]}
                  tickCount={1}
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
                 <VictoryAxis
                        dependentAxis
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
                {returnLine(0)}
                {returnLine(1)}
                {returnLine(2)}
                </VictoryChart>
                { createLegend(0, 2) }
                { infoButton() }
              </View>
              </ScrollView>
              <ScrollView maximumZoomScale={3}>
               <View style={styles.slide}>
                { closeButton }
                <Text style={styles.title}> Personality Insights Monthly II </Text>
                <VictoryChart
                theme={VictoryTheme.material}>
               <VictoryAxis
                  tickFormat={[]}
                  tickCount={1}
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
                 <VictoryAxis
                        dependentAxis
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
                {returnLine(3)}
                {returnLine(4)}
                {returnLine(5)}
                </VictoryChart>
                { createLegend(3, 5) }
               { infoButton() }
              </View>
              </ScrollView>
              <ScrollView maximumZoomScale={3}>
              <View style={styles.slide}>
                { closeButton }
                <Text style={styles.title}> Personality Insights Monthly III </Text>
                <VictoryChart
                theme={VictoryTheme.material}>
               <VictoryAxis
                  tickFormat={[]}
                  tickCount={1}
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
                 <VictoryAxis
                        dependentAxis
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
                {returnLine(6)}
                {returnLine(7)}
                {returnLine(8)}
                </VictoryChart>
                { createLegend(6,8) }
               { infoButton() }
              </View>
              </ScrollView>
              <ScrollView maximumZoomScale={3}>
              <View style={styles.slide}>
                { closeButton }
                <Text style={styles.title}> Personality Insights Monthly IV </Text>
                <VictoryChart
                theme={VictoryTheme.material}>
               <VictoryAxis
                  tickFormat={[]}
                  tickCount={1}
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
                 <VictoryAxis
                        dependentAxis
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
                {returnLine(9)}
                {returnLine(10)}
                {returnLine(11)}
                </VictoryChart>
                { createLegend(9,11) }
               { infoButton() }
              </View>
              </ScrollView>
              <ScrollView maximumZoomScale={3}>
              <View style={styles.slide}>
                { closeButton }
                <Text style={styles.title}> Personality Insights Monthly V </Text>
                <VictoryChart
                theme={VictoryTheme.material}>
               <VictoryAxis
                  tickFormat={[]}
                  tickCount={1}
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
                 <VictoryAxis
                        dependentAxis
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
                {returnLine(12)}
                {returnLine(13)}
                {returnLine(14)}
                </VictoryChart>
               { createLegend(12, 14) }
               { infoButton() }
              </View>
              </ScrollView>
              <ScrollView maximumZoomScale={3}>
               <View style={styles.slide}>
                { closeButton }
                <Text style={styles.title}> Emotional Tone Insights Monthly I</Text>
                <VictoryChart
                theme={VictoryTheme.material}>
               <VictoryAxis
                  tickFormat={[]}
                  tickCount={1}
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
                 <VictoryAxis
                        dependentAxis
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
                {returnLine(0,true)}
                {returnLine(1,true)}
                {returnLine(2,true)}
                </VictoryChart>
                { createLegend(0, 2, true) }
                <TouchableOpacity
                  style={{marginTop: 10}}
                  onPress={() => Alert.alert(
                   '',
                   'Emotional tone measures different types of emotions and feelings that people express. For each tone, a score of less than 50% indicates that the tone is unlikely to be perceived in the recorded content. Likewise, a score greater than 75% indicates high likelihood that the tone will be perceived.'
                 )}>
                  <View style={styles.info}>
                   <Icon name="ios-information-circle-outline" style={{color: 'white'}} />
                 </View>
                </TouchableOpacity>
              </View>
              </ScrollView>
              <ScrollView maximumZoomScale={3}>
               <View style={styles.slide}>
                { closeButton }
                <Text style={styles.title}> Emotional Tone Insights Monthly II </Text>
                <VictoryChart
                theme={VictoryTheme.material}>
               <VictoryAxis
                  tickFormat={[]}
                  tickCount={1}
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
                 <VictoryAxis
                        dependentAxis
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
                {returnLine(3,true)}
                {returnLine(4,true)}
                </VictoryChart>
                { createLegend(3, 4, true)}
                <TouchableOpacity
                  style={{ marginTop: 25}}
                  onPress={() => Alert.alert(
                   '',
                   'Emotional tone measures different types of emotions and feelings that people express. For each tone, a score of less than 50% indicates that the tone is unlikely to be perceived in the recorded content. Likewise, a score greater than 75% indicates high likelihood that the tone will be perceived.'
                 )}>
                  <View style={styles.info}>
                   <Icon name="ios-information-circle-outline" style={{color: 'white'}} />
                 </View>
                </TouchableOpacity>
              </View>
              </ScrollView>
              <ScrollView maximumZoomScale={3}>
               <View style={styles.slide}>
                { closeButton }
                <Text style={styles.title}> Language Tone Insights Monthly </Text>
                <VictoryChart
                theme={VictoryTheme.material}>
               <VictoryAxis
                  tickFormat={[]}
                  tickCount={1}
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
                 <VictoryAxis
                        dependentAxis
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
                {returnLine(5,true)}
                {returnLine(6,true)}
                {returnLine(7,true)}
                </VictoryChart>
                { createLegend(5, 7, true) }
                <TouchableOpacity
                  style={{ marginTop: 10}}
                  onPress={() => Alert.alert(
                   '',
                   'Language tone describes perceived language style based on the recorded content. For each tone, a score of less than 50% indicates that the tone is unlikely to be perceived in the recorded content. Likewise, a score greater than 75% indicates high likelihood that the tone will be perceived.'
                 )}>
                  <View style={styles.info}>
                   <Icon name="ios-information-circle-outline" style={{color: 'white'}} />
                 </View>
                </TouchableOpacity>
              </View>
              </ScrollView>
              <ScrollView maximumZoomScale={3}>
               <View style={styles.slide}>
                  { closeButton }
                  <Text style={styles.title}> Social Tone Insights Monthly I </Text>
                  <VictoryChart
                  theme={VictoryTheme.material}>
                 <VictoryAxis
                    tickFormat={[]}
                    tickCount={1}
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
                   <VictoryAxis
                          dependentAxis
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
                  {returnLine(8,true)}
                  {returnLine(9,true)}
                  {returnLine(10,true)}
                  </VictoryChart>
                  {createLegend(8, 10, true)}
                  <TouchableOpacity
                    style={{ marginTop: 10}}
                    onPress={() => Alert.alert(
                     '',
                     'Social tone measures the social tendencies in the recorded content on five categories that are adopted from the Big Five personality model. For each tone, a score of less than 50% indicates that the tone is unlikely to be perceived in the recorded content. Likewise, a score greater than 75% indicates high likelihood that the tone will be perceived.'
                   )}>
                    <View style={styles.info}>
                     <Icon name="ios-information-circle-outline" style={{color: 'white'}} />
                   </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
              <ScrollView maximumZoomScale={3}>
                <View style={styles.slide}>
                  { closeButton }
                  <Text style={styles.title}> Social Tone Insights Monthly II </Text>
                  <VictoryChart
                  theme={VictoryTheme.material}>
                 <VictoryAxis
                    tickFormat={[]}
                     tickCount={1}
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
                   <VictoryAxis
                          dependentAxis
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
                  {returnLine(11,true)}
                  {returnLine(12,true)}
                  </VictoryChart>
                  {createLegend(11, 12, true)}
                   <TouchableOpacity
                    style={{ marginTop: 25}}
                    onPress={() => Alert.alert(
                     '',
                     'Social tone measures the social tendencies in the recorded content on five categories that are adopted from the Big Five personality model. For each tone, a score of less than 50% indicates that the tone is unlikely to be perceived in the recorded content. Likewise, a score greater than 75% indicates high likelihood that the tone will be perceived.'
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

const mapStateToProps = ({ recordings, admin }) => {
  const monthlyPersonalityTraits = recordings.monthlyTotalRecordings.personality;
  const personalityArray = filterTraits(monthlyPersonalityTraits);

  console.log('personality', personalityArray);

  return {
    personalityArray,
    toneArray: recordings.monthlyTotalRecordings.tone,
    imageId: admin.imageId
  };
};

export default connect(mapStateToProps)(MonthlyTotalChart);
