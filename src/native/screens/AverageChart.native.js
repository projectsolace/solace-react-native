import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, AlertIOS, AsyncStorage, ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, InputGroup, Input, Icon, Button, Container } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { currentUser } from '../reducer/UserReducer.native'
import store from '../store.native';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory-native'
import Swiper from 'react-native-swiper';


var STORAGE_KEY = 'id_token';

 class AverageChart extends Component {
  constructor(props) {
    super(props);
        this.state = {
      personality: [{"quality":"Adventurousness","score":0.9451235246230382},{"quality":"Artistic interests","score":0.8978249344694069},{"quality":"Emotionality","score":0.3061093343526755},{"quality":"Imagination","score":0.07768119984358562},{"quality":"Intellect","score":0.9963908905039858},{"quality":"Authority-challenging","score":0.8876872801164253},{"quality":"Achievement striving","score":0.8775587629252348},{"quality":"Cautiousness","score":0.9900360945790783},{"quality":"Dutifulness","score":0.9165723639795911},{"quality":"Orderliness","score":0.5449435338782984},{"quality":"Self-discipline","score":0.8177020802489392},{"quality":"Self-efficacy","score":0.9369764881039473},{"quality":"Activity level","score":0.9600274475411859},{"quality":"Assertiveness","score":0.9966572389430082},{"quality":"Cheerfulness","score":0.29540933640636086},{"quality":"Excitement-seeking","score":0.06151103900050897},{"quality":"Outgoing","score":0.7639036871360837},{"quality":"Gregariousness","score":0.36601820506282146},{"quality":"Altruism","score":0.9241810523354728},{"quality":"Cooperation","score":0.8428795049691322},{"quality":"Modesty","score":0.36345942735618175},{"quality":"Uncompromising","score":0.9199303411956398},{"quality":"Sympathy","score":0.9849703814160096},{"quality":"Trust","score":0.8024525677846805},{"quality":"Fiery","score":0.001362370425177395},{"quality":"Prone to worry","score":0.009161283655604202},{"quality":"Melancholy","score":0.10707121727365931},{"quality":"Immoderation","score":0.002930207141535246},{"quality":"Self-consciousness","score":0.1067001915672049},{"quality":"Susceptible to stress","score":0.01542671490525327},{"quality":"Challenge","score":0.022561739160372518},{"quality":"Closeness","score":0.11473427548489984},{"quality":"Curiosity","score":0.8347081939532146},{"quality":"Excitement","score":0.08821787120728142},{"quality":"Harmony","score":0.15706581344811132},{"quality":"Ideal","score":0.05584583931834414},{"quality":"Liberty","score":0.13255174782307494},{"quality":"Love","score":0.006177324293174746},{"quality":"Practicality","score":0.048658867268861816},{"quality":"Self-expression","score":0.04097071438724409},{"quality":"Stability","score":0.2670703651672256},{"quality":"Structure","score":0.8496288177961202},{"quality":"Conservation","score":0.27922834228066995},{"quality":"Openness to change","score":0.6241668099846879},{"quality":"Hedonism","score":0.004470834640978916},{"quality":"Self-enhancement","score":0.006370984738533592},{"quality":"Self-transcendence","score":0.10241087522505021}],
      tone: [{"quality":"Anger","score":0.244936},{"quality":"Disgust","score":0.019101},{"quality":"Fear","score":0.069773},{"quality":"Joy","score":0.113992},{"quality":"Sadness","score":0.55176},{"quality":"Analytical","score":0.52201},{"quality":"Confident","score":0},{"quality":"Tentative","score":0},{"quality":"Openness","score":0.642256},{"quality":"Conscientiousness","score":0.985869},{"quality":"Extraversion","score":0.267294},{"quality":"Agreeableness","score":0.153689},{"quality":"Emotional Range","score":0.778808}]
    }

  }

  render() {
    let count = 1
    let tonecount = 1
    let data=this.state.personality.sort(function(a,b){return b.score - a.score}).map(function(obj){return {x:count++,y:obj.score*100}})
    let labels=this.state.personality.map(function(obj){return obj.quality+` ${(obj.score*100).toFixed(2)}%`})
    let tonaldata=this.state.tone.sort(function(a,b){return b.score - a.score}).map(function(obj){return {x:tonecount++,y:obj.score*100}})
    let tonelabels=this.state.tone.map(function(obj){return obj.quality+` ${(obj.score*100).toFixed(2)}%`})
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} showsButtons={true}>

          <View style={styles.slide}>
            <VictoryChart>
              <VictoryBar
               horizontal
               domain={{x:[0,100]}}
               labels={labels.slice(35,47)}
               height={500}
               padding={75}
               style={{
                labels: {
                 fontSize: 5
                },
                data: {
                 width: 12,
                 fill: (data) => data.x%2==0 ? "blue" : "tomato"
                }
                }}
               data={data.slice(35,47)}

              />
            </VictoryChart>
          </View>

          <View style={styles.slide}>
            <VictoryChart>
              <VictoryBar
               horizontal
               domain={{x:[0,100]}}
               labels={labels.slice(24,35)}
               height={1000}
               padding={75}
               style={{
                labels: {
                 fontSize: 5
                },
                data: {
                 width: 8,
                 fill: (data) => data.x%2==0 ? "blue" : "tomato"
                }
                }}
               data={data.slice(24,35)}
              />
            </VictoryChart>
          </View>

          <View style={styles.slide}>
            <VictoryChart>
                <VictoryBar
                 horizontal
                 domain={{x:[0,100]}}
                 labels={labels.slice(12,24)}
                 height={1000}
                 padding={75}
                 style={{
                  labels: {
                    fontSize:5
                  },
                  data: {
                    width: 8,
                    fill: (data) => data.x%2==0 ?"blue" : "tomato"
                  }
                 }}
                 data={data.slice(12,24)}

                />
            </VictoryChart>
          </View>

          <View style={styles.slide}>
            <VictoryChart>
              <VictoryBar
               horizontal
               domain={{x:[0,100]}}
               labels={labels.slice(0,12)}
               height={1000}
               padding={75}
               style={{
                labels: {
                 fontSize:5
                },
                data: {
                 width: 8,
                 fill: (data) => data.x%2==0 ? "blue" : "tomato"
                }
               }}
               data={data.slice(0,12)}
              />
            </VictoryChart>
          </View>

          <View style={styles.slide}>
            <VictoryChart>
              <VictoryBar
               horizontal
               domain={{x:[0,100]}}
               labels={tonelabels}
               height={1000}
               padding={10}
               style={{
                labels: {
                 fontSize: 5
                },
                data: {
                 width: 8,
                 fill: (data) => data.x%2==0 ? "blue" : "tomato"
                }
               }}
               data={tonaldata}
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

// const styles = StyleSheet.create({
//   scrollView:{
//     backgroundColor: '#6A85B1',
//     height:1000
//   },
//   container: {
//     flex: 1,
//     width: null,
//     height: 2000,
//     backgroundColor: 'rgba(0,0,100,0)'
//   },
//   content: {
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   text: {
//     fontSize: 30,
//     fontFamily: 'Helvetica',
//     color: 'white',
//     fontWeight: 'bold'
//   },
//   inputField: {
//     fontSize: 18,
//     fontFamily: 'Helvetica',
//     color: 'white',
//     fontWeight: 'bold'
//   },
//   inputCreds: {
//     paddingLeft: 15,
//     marginBottom: 17,
//     marginLeft: 20,
//     marginRight: 20,
//     backgroundColor: 'rgba(0,0,0,0.3)',
//     borderColor: 'rgba(0,0,0,0)'
//   },
//   login: {
//     marginLeft: 20,
//     marginRight: 20
//   }
// });

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    allUsers: state.currentUser
  };
};

export default connect(mapStateToProps)(AverageChart);


