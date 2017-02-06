import React, {Component} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
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


    return (
  <Image source={{uri: `https://s3.amazonaws.com/watsonapi/images/${imageId}.jpg`}} style={styles.img} >
    <BlurView blurType="light" blurAmount={50} style={styles.container}>
      <View style={styles.container}>
        <Swiper showsButtons={true}>

          <View style={styles.slide}>
            <Text style={styles.title}> Personality Insights All Time I </Text>
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
             <Text style={styles.blurb}>The scores you see are all percentiles. They are comparing one person to a broader population. For example, a 90% on Extraversion does not mean that the person is 90% extroverted. It means that for that single trait, the person is more extroverted than 90% of the people in the population.</Text>
          </View>
           <View style={styles.slide}>
             <Text style={styles.title}> Personality Insights All Time II </Text>
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
             <Text style={styles.blurb}>The scores you see are all percentiles. They are comparing one person to a broader population. For example, a 90% on Extraversion does not mean that the person is 90% extroverted. It means that for that single trait, the person is more extroverted than 90% of the people in the population.</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.title}> Personality Insights All Time III </Text>
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
             <Text style={styles.blurb}>The scores you see are all percentiles. They are comparing one person to a broader population. For example, a 90% on Extraversion does not mean that the person is 90% extroverted. It means that for that single trait, the person is more extroverted than 90% of the people in the population.</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.title}> Personality Insights All Time IV </Text>
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
             <Text style={styles.blurb}>The scores you see are all percentiles. They are comparing one person to a broader population. For example, a 90% on Extraversion does not mean that the person is 90% extroverted. It means that for that single trait, the person is more extroverted than 90% of the people in the population.</Text>
          </View>
          <View style={styles.slide}>
          <Text style={styles.title}> Personality Insights All Time V </Text>
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
             <Text style={styles.blurb}>The scores you see are all percentiles. They are comparing one person to a broader population. For example, a 90% on Extraversion does not mean that the person is 90% extroverted. It means that for that single trait, the person is more extroverted than 90% of the people in the population.</Text>
          </View>
           <View style={styles.slide}>
            <Text style={styles.title}> Emotional Tone Insights All Time I</Text>
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
             <Text style={styles.blurb}>For each tone, a score of less than 50% indicates that the tone is unlikely to be perceived in the recorded content. Likewise, a score greater than 75% indicates high likelihood that the tone will be perceived. {'\n'}

                Emotional tone measures different types of emotions and feelings that people express.</Text>
          </View>
           <View style={styles.slide}>
            <Text style={styles.title}> Emotional Tone Insights All Time II </Text>
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
             <Text style={styles.blurb}>For each tone, a score of less than 50% indicates that the tone is unlikely to be perceived in the recorded content. Likewise, a score greater than 75% indicates high likelihood that the tone will be perceived. {'\n'}

                Emotional tone measures different types of emotions and feelings that people express.</Text>
          </View>
           <View style={styles.slide}>
                <Text style={styles.title}> Language Tone Insights All Time </Text>
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
             <Text style={styles.blurb}>For each tone, a score of less than 50% indicates that the tone is unlikely to be perceived in the recorded content. Likewise, a score greater than 75% indicates high likelihood that the tone will be perceived. {'\n'}

                Social tone measures the social tendencies in the recorded content on five categories that are adopted from the Big Five personality model.</Text>
          </View>
           <View style={styles.slide}>
                <Text style={styles.title}> Social Tone Insights All Time I </Text>
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
             <Text style={styles.blurb}>For each tone, a score of less than 50% indicates that the tone is unlikely to be perceived in the recorded content. Likewise, a score greater than 75% indicates high likelihood that the tone will be perceived. {'\n'}

                Language tone describes perceived language style based on the recorded content.</Text>
          </View>
            <View style={styles.slide}>
                <Text style={styles.title}> Social Tone Insights All Time II </Text>
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
             <Text style={styles.blurb}>For each tone, a score of less than 50% indicates that the tone is unlikely to be perceived in the recorded content. Likewise, a score greater than 75% indicates high likelihood that the tone will be perceived. {'\n'}

                Language tone describes perceived language style based on the recorded content.</Text>
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
  blurb: {
    color: 'white',
    fontFamily: 'Helvetica',
    width: 250
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
    imageId: state.admin.imageid
  };
};

export default connect(mapStateToProps)(WeeklyTotalChart);
