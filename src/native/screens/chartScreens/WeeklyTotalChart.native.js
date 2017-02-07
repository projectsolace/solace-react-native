import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { VictoryBar, VictoryChart, VictoryLine, VictoryStack, VictoryTheme, VictoryLabel, VictoryAxis } from 'victory-native';
import Swiper from 'react-native-swiper';
import { BlurView } from 'react-native-blur';

class WeeklyTotalChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let personalityArray = this.props.recordings.personality.filter(function(obj){return obj.key =='Imagination' || obj.key =='Self-discipline' || obj.key =='Cheerfulness' || obj.key =='Outgoing' || obj.key =='Altruism' || obj.key =='Modesty' || obj.key =='Trust' || obj.key =='Self-consciousness' || obj.key =='Curiosity' || obj.key =='Harmony' || obj.key =='Love' || obj.key =='Openness to change' || obj.key =='Susceptible to stress' || obj.key =='Stability' || obj.key =='Intellect'});
    let toneArray = this.props.recordings.tone;
    const { imageId } = this.props;
    console.log(personalityArray)
    console.log(toneArray)

  function returnLine(index, tone){
    personalityArray = tone ? toneArray : personalityArray
    let colorArray = [ '#7D26CD','#0000EE','#6495ED','#68228B','#c06dff','#104E8B','#B0C4DE','#0000FF','#5D478B','#1E90FF','#F0F8FF','#AB82FF','#836FFF','#9932CC','#BCD2EE','#6E7B8B','#191970','#6A5ACD','#0000CD','#9A32CD','#B23AEE','#7A67EE','#6C7B8B','#9370DB','#7B68EE','#473C8B','#000080','#D15FEE','#9F79EE','#BA55D3','#4B0082','#778899','#4682B4','#483D8B','#3A5FCD','#7A378B','#8A2BE2','#4169E1','#63B8FF','#8470FF','#800080','#A2B5CD','#27408B','#9400D3','#1874CD','#551A8B' ]
    return (
      <VictoryLine
      data={personalityArray[index].value}
       domain={{y: [0, 110], x: [0, personalityArray[index].value.length+2]}}
        x="date"
        y={(datum) => datum.score*100}
        label={personalityArray[index].key}
        style={{
          data: {stroke: colorArray[index]},
          labels: {fontSize: 12, fill: 'white'}
        }}
        labelComponent={<VictoryLabel/>}
        />
      )
    }
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

    return (
      <Image source={{uri: `https://s3.amazonaws.com/watsonapi/images/${imageId}.jpg`}} style={styles.img} >
        <BlurView blurType="light" blurAmount={50} style={styles.container}>
          <View style={styles.container}>
            <Swiper showsButtons={true}>
              <View style={styles.slide}>
                <Text style={styles.title}> Personality Insights Weekly I </Text>
                <VictoryChart
                theme={VictoryTheme.material}
                >
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
                {returnLine(0)}
                {returnLine(1)}
                {returnLine(2)}
                </VictoryChart>
               { infoButton }
              </View>
               <View style={styles.slide}>
                 <Text style={styles.title}> Personality Insights Weekly II </Text>
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
               { infoButton }
              </View>
              <View style={styles.slide}>
                <Text style={styles.title}> Personality Insights Weekly III </Text>
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
               { infoButton }
              </View>
              <View style={styles.slide}>
                <Text style={styles.title}> Personality Insights Weekly IV </Text>
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
               { infoButton }
              </View>
              <View style={styles.slide}>
              <Text style={styles.title}> Personality Insights Weekly V </Text>
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
               { infoButton }
              </View>
               <View style={styles.slide}>
                <Text style={styles.title}> Emotional Tone Insights Weekly I</Text>
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
               <View style={styles.slide}>
                <Text style={styles.title}> Emotional Tone Insights Weekly II </Text>
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
               <View style={styles.slide}>
                    <Text style={styles.title}> Language Tone Insights Weekly </Text>
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
                <TouchableOpacity
                  style={{ marginTop: 25}}
                  onPress={() => Alert.alert(
                   '',
                   'Language tone describes perceived language style based on the recorded content. For each tone, a score of less than 50% indicates that the tone is unlikely to be perceived in the recorded content. Likewise, a score greater than 75% indicates high likelihood that the tone will be perceived.'
                 )}>
                  <View style={styles.info}>
                   <Icon name="ios-information-circle-outline" style={{color: 'white'}} />
                 </View>
                </TouchableOpacity>
              </View>
               <View style={styles.slide}>
                  <Text style={styles.title}> Social Tone Insights Weekly I </Text>
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
                <View style={styles.slide}>
                    <Text style={styles.title}> Social Tone Insights Weekly II </Text>
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
  }
});

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    recordings: state.recordings.weeklyTotalRecordings,
    imageId: state.admin.imageId
  };
};

export default connect(mapStateToProps)(WeeklyTotalChart);
