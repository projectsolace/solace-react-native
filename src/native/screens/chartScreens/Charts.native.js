import React, {Component} from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { fetchLatestRecordings, fetchWeeklyAvgRecordings, fetchMonthlyAvgRecordings, fetchAllAvgRecordings, fetchWeeklyTotalRecordings, fetchMonthlyTotalRecordings, fetchAllTotalRecordings} from '../../reducer/recordings.native';
import store from '../../store.native';

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestRecordings: {},
      weeklyAvgRecordings: {},
      monthlyAvgRecordings: {},
      allAvgRecordings: {},
      weeklyTotalRecordings: {},
      monthlyTotalRecordings: {},
      allTotalRecordings: {}
    };
  }

  componentDidMount() {
    const userId = this.props.user.id;
    const latestRecordings = store.dispatch(fetchLatestRecordings(userId));
    const weeklyAvgRecordings = store.dispatch(fetchWeeklyAvgRecordings(userId));
    const monthlyAvgRecordings = store.dispatch(fetchMonthlyAvgRecordings(userId));
    const allAvgRecordings = store.dispatch(fetchAllAvgRecordings(userId));
    const weeklyTotalRecordings = store.dispatch(fetchWeeklyTotalRecordings(userId));
    const monthlyTotalRecordings = store.dispatch(fetchMonthlyTotalRecordings(userId));
    const allTotalRecordings = store.dispatch(fetchAllTotalRecordings(userId));
    this.setState({
      latestRecordings,
      weeklyAvgRecordings,
      monthlyAvgRecordings,
      allAvgRecordings,
      weeklyTotalRecordings,
      monthlyTotalRecordings,
      allTotalRecordings
    });
  }

  render() {
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
                  <Button rounded block info iconRight style={styles.button} onPress={Actions.latestData}>
                    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>
                      Latest Data
                    </Text>
                    <Icon name="ios-arrow-forward" />
                  </Button>
                </Content>
              </Row>
              <Row>
                <Col style={{paddingLeft: 10}}>
                  <Button rounded success iconRight style={styles.button} onPress={Actions.weeklyAverage}>
                      Weekly Average
                    <Icon name="ios-arrow-forward" />
                  </Button>
                  <Button rounded success iconRight style={styles.button} onPress={Actions.monthlyAverage}>
                      Monthly Average
                    <Icon name="ios-arrow-forward" />
                  </Button>
                  <Button rounded success iconRight style={styles.button} onPress={Actions.allTimeAverage}>
                      All Time Average
                    <Icon name="ios-arrow-forward" />
                  </Button>
                </Col>
                <Col style={{paddingRight: 10}}>
                  <Button rounded warning iconRight style={styles.button} onPress={Actions.weeklyTotal}>
                      Weekly Total
                    <Icon name="ios-arrow-forward" />
                  </Button>
                  <Button rounded warning iconRight style={styles.button} onPress={Actions.monthlyTotal}>
                      Monthly Total
                    <Icon name="ios-arrow-forward" />
                  </Button>
                  <Button rounded warning iconRight style={styles.button} onPress={Actions.allTimeTotal}>
                      All Time Total
                    <Icon name="ios-arrow-forward" />
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
    margin: 10
  }
});

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Charts);
