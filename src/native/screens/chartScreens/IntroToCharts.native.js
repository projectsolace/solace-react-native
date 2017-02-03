import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

export class IntroToCharts extends Component {

    constructor(props){
      super(props)
    }

  render(){
    const userId = this.props.user.id;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Want to view your data? {'\n'}
          Record something to get started! {'\n'}
          Once you have some data... {'\n'}
          Click "Average" buttons for more accurate data {'\n'}
          Click "Total" buttons to compare your data over time
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontFamily: 'Helvetica',
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignSelf: 'stretch',
    margin: 10
  }
});

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(IntroToCharts);
