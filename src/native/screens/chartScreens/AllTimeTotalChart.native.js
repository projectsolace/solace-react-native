import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { VictoryBar, VictoryChart, VictoryLine, VictoryStack, VictoryTheme } from 'victory-native';
import Swiper from 'react-native-swiper';

class AllTimeTotalChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const personalityArray = this.props.recordings.personality;
    const toneArray = this.props.recordings.tone;
    console.log(personalityArray)
    console.log(toneArray)


    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} showsButtons={true}>

          <View style={styles.slide}>
            <VictoryChart
            theme={VictoryTheme.material}>
              <VictoryLine
              data={personalityArray[20].value}
                x="date"
                y={(datum) => datum.score*100}
              />
              <VictoryLine
              data={personalityArray[21].value}
                x="date"
                y={(datum) => datum.score*100}
              />
              {
              //<VictoryLine
              // data={personalityArray[21].value}
              //   x="date"
              //   y={(datum) => datum.score*100}
              // />
              //  <VictoryLine
              // data={personalityArray[22].value}
              //   x="date"
              //   y={(datum) => datum.score*100}
              // />
              //  <VictoryLine
              // data={personalityArray[23].value}
              //   x="date"
              //   y={(datum) => datum.score*100}
               ///>
             }
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
    recordings: state.recordings.allTotalRecordings
  };
};

export default connect(mapStateToProps)(AllTimeTotalChart);
