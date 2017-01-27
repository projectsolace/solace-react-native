import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, InputGroup, Input, Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.verifyLogin = this.verifyLogin.bind(this);
  }

  verifyLogin() {

  }

  render() {

    return (
      <Image source={ require('../../../images/sky.jpeg')} style={ styles.container } >
        <Grid>
          <Row size={65} style={styles.content} >
            <Text style={styles.text}>
              Welcome to Watson {'\n'}   Lets get started!
            </Text>
          </Row>
          <Row size={35}>
            <Content>
              <InputGroup borderType="rounded" style={styles.inputCreds}>
                <Icon name="ios-person-outline"/>
                <Input
                placeholder="email"
                style={styles.inputField}
                />
              </InputGroup>
              <InputGroup borderType="rounded" style={styles.inputCreds}>
                <Icon name="ios-lock-outline"/>
                <Input
                placeholder="password"
                style={styles.inputField}
                />
              </InputGroup>
              <Row>
                <Content>
                  <Button rounded block info style={styles.login} onPress={Actions.homepage}>
                    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>
                      Log In
                    </Text>
                  </Button>
                </Content>
              </Row>
              <Row>
                <Col style={{paddingTop: 15, paddingLeft: 20}}>
                  <Button transparent>
                    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 14}} onPress={ Actions.signup} >
                      Create Account
                    </Text>
                  </Button>
                </Col>
                <Col style={{paddingTop: 15, width: 80}}>
                  <Button transparent>
                    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 14}}>
                      Help
                    </Text>
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
    backgroundColor: 'rgba(0,0,0,0)',
    resizeMode: 'stretch'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    fontFamily: 'Helvetica',
    color: 'white',
    fontWeight: 'bold'
  },
  inputField: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    color: 'white',
    fontWeight: 'bold'
  },
  inputCreds: {
    paddingLeft: 15,
    marginBottom: 17,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderColor: 'rgba(0,0,0,0)'
  },
  login: {
    marginLeft: 20,
    marginRight: 20
  }
});

