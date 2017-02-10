import React, {Component} from 'react';
import { StyleSheet, Text } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import { Content, Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { fetchLatestRecordings, fetchWeeklyAvgRecordings, fetchMonthlyAvgRecordings, fetchAllAvgRecordings, fetchWeeklyTotalRecordings, fetchMonthlyTotalRecordings, fetchAllTotalRecordings} from '../../reducer/recordings.native';
import store from '../../store.native';

class Charts extends Component {
  constructor(props) {
    super(props);
    this.getMonthlyAvgRecordings = this.getMonthlyAvgRecordings.bind(this);
    this.getAllTimeAvgRecordings = this.getAllTimeAvgRecordings.bind(this);
    this.getWeeklyTotalRecordings = this.getWeeklyTotalRecordings.bind(this);
    this.getMonthlyTotalRecordings = this.getMonthlyTotalRecordings.bind(this);
    this.getAllTimeTotalRecordings = this.getAllTimeTotalRecordings.bind(this);
  }

  componentDidMount() {
    store.dispatch(fetchLatestRecordings(this.props.user.id));
    store.dispatch(fetchWeeklyAvgRecordings(this.props.user.id));
  }

  getMonthlyAvgRecordings() {
    store.dispatch(fetchMonthlyAvgRecordings(this.props.user.id));
  }

  getAllTimeAvgRecordings() {
    store.dispatch(fetchAllAvgRecordings(this.props.user.id));
  }

  getWeeklyTotalRecordings() {
    store.dispatch(fetchWeeklyTotalRecordings(this.props.user.id));
  }

  getMonthlyTotalRecordings() {
    store.dispatch(fetchMonthlyTotalRecordings(this.props.user.id));
  }

  getAllTimeTotalRecordings() {
    store.dispatch(fetchAllTotalRecordings(this.props.user.id));
  }

  render() {
    return (
      <Content>
        <Row size={30} style={styles.content}>
          <Text style={styles.text}>
            View Your Data
          </Text>
        </Row>
        <Row size={70} style={styles.content} >
          <Content>
            <Row style={{paddingLeft: 10, paddingRight: 10}}>
              <Content>
                { this.props.recordings.latestRecordings && this.props.recordings.latestRecordings.personality
                  ? (<Button rounded block info iconRight style={styles.button} onPress={Actions.latestData}>
                      <Text> Latest Data </Text>
                      <Icon name="ios-arrow-forward" />
                    </Button>)
                  : (<Button rounded info block iconRight style={styles.button} onPress={Actions.intro}>
                      <Text> Latest Data </Text>
                      <Icon name="ios-arrow-forward" />
                    </Button>)
                }
              </Content>
            </Row>
            { this.props.recordings.weeklyAvgRecordings.created_at
              ? (<Row>
                  <Col style={{paddingLeft: 10}}>
                    <Button rounded success iconRight style={styles.button} onPress={Actions.weeklyAverage}>
                        Weekly Average
                      <Icon name="ios-arrow-forward" />
                    </Button>
                    <Button rounded success iconRight style={styles.button} onPress={this.getMonthlyAvgRecordings}>
                        Monthly Average
                      <Icon name="ios-arrow-forward" />
                    </Button>
                    <Button rounded success iconRight style={styles.button} onPress={this.getAllTimeAvgRecordings}>
                        All Time Average
                      <Icon name="ios-arrow-forward" />
                    </Button>
                  </Col>
                  <Col style={{paddingRight: 10}}>
                    <Button rounded warning iconRight style={styles.button} onPress={this.getWeeklyTotalRecordings}>
                        Weekly Total
                      <Icon name="ios-arrow-forward" />
                    </Button>
                    <Button rounded warning iconRight style={styles.button} onPress={this.getMonthlyTotalRecordings}>
                        Monthly Total
                      <Icon name="ios-arrow-forward" />
                    </Button>
                    <Button rounded warning iconRight style={styles.button} onPress={this.getAllTimeTotalRecordings}>
                        All Time Total
                      <Icon name="ios-arrow-forward" />
                    </Button>
                  </Col>
                </Row>)
              : (<Row>
                  <Col style={{paddingLeft: 10}}>
                    <Button disabled rounded iconRight style={styles.button}>
                        Weekly Average
                      <Icon name="ios-arrow-forward" />
                    </Button>
                    <Button disabled rounded iconRight style={styles.button}>
                        Monthly Average
                      <Icon name="ios-arrow-forward" />
                    </Button>
                    <Button disabled rounded iconRight style={styles.button}>
                        All Time Average
                      <Icon name="ios-arrow-forward" />
                    </Button>
                  </Col>
                  <Col style={{paddingRight: 10}}>
                    <Button disabled rounded iconRight style={styles.button}>
                        Weekly Total
                      <Icon name="ios-arrow-forward" />
                    </Button>
                    <Button disabled rounded iconRight style={styles.button}>
                        Monthly Total
                      <Icon name="ios-arrow-forward" />
                    </Button>
                    <Button disabled rounded iconRight style={styles.button}>
                        All Time Total
                      <Icon name="ios-arrow-forward" />
                    </Button>
                  </Col>
                </Row>)
            }
          </Content>
        </Row>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    shadowColor: '#000000',
    shadowOffset: {
      height: 1
    },
  shadowRadius: 2,
  shadowOpacity: 0.5
  },
  button: {
    alignSelf: 'stretch',
    margin: 10
  }
});

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    user: state.user,
    recordings: state.recordings
  };
};

export default connect(mapStateToProps)(Charts);
