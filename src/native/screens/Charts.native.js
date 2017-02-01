import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, AlertIOS, AsyncStorage, Container } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, InputGroup, Input, Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { currentUser } from '../reducer/UserReducer.native'
import store from '../store.native';
import Avg from './AverageChart'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory-native'



var STORAGE_KEY = 'id_token';

 class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: {}
    };
  }

  render() {
    console.log('here comes the state', this.state)
    return (
      <Image source={{ uri: 'https://s3.amazonaws.com/watsonapi/images/3.jpg'}} style={styles.container} >
        <Grid>
          <Row size={30} style={styles.content} >
            <Text style={styles.text} >
              Choose a filter below
            </Text>
          </Row>
          <Row size={70} style={styles.content} >
            <Content>
              <Row style={{paddingLeft: 10, paddingRight: 10}}>
                <Content>
                  <Button rounded block info iconRight style={styles.button} onPress={Actions.chartModal}>
                    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>
                      Latest Data
                    </Text>
                    <Icon name='ios-arrow-forward' />
                  </Button>
                </Content>
              </Row>
              <Row>
                <Col style={{paddingLeft: 10}}>
                  <Button rounded success iconRight style={styles.button} onPress={Actions.chartModal}>
                      Weekly Average
                    <Icon name='ios-arrow-forward' />
                  </Button>
                  <Button rounded success iconRight style={styles.button} onPress={Actions.chartModal}>
                      Monthly Average
                    <Icon name='ios-arrow-forward' />
                  </Button>
                  <Button rounded success iconRight style={styles.button} onPress={Actions.chartModal}>
                      All Time Average
                    <Icon name='ios-arrow-forward' />
                  </Button>
                </Col>
                <Col style={{paddingRight: 10}}>
                  <Button rounded warning iconRight style={styles.button} onPress={Actions.chartModal}>
                      Weekly Over Time
                    <Icon name='ios-arrow-forward' />
                  </Button>
                  <Button rounded warning iconRight style={styles.button} onPress={Actions.chartModal}>
                      Monthly Over Time
                    <Icon name='ios-arrow-forward' />
                  </Button>
                  <Button rounded warning iconRight style={styles.button} onPress={Actions.chartModal}>
                      All Time Over Time
                    <Icon name='ios-arrow-forward' />
                  </Button>
                </Col>
              </Row>
            </Content>
          </Row>
        </Grid>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    fontFamily: 'Helvetica',
    color: 'black',
    fontWeight: 'bold'
  },
  button: {
    alignSelf: 'stretch',
    margin: 5
  }
});


/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    allUsers: state.currentUser
  };
};

export default connect(mapStateToProps)(Charts);


          // <Grid>
          //   <Row size={65} style={styles.content} >
          //     <Text style={styles.text} onPress={()=> Actions.chartModal()}>
          //       Here are the charts!
          //     </Text>
          //   </Row>
          // </Grid>
