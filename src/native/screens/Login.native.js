import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, AlertIOS, AsyncStorage } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, InputGroup, Input, Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { currentUser } from '../reducer/UserReducer.native'
import store from '../store.native';

var STORAGE_KEY = 'id_token';

 class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.onValueChange = this.onValueChange.bind(this);
    this._userLogin = this._userLogin.bind(this);
  }

  async onValueChange(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
      }
  }

  _userLogin() {
    const { email, password } = this.state;
    let value = {email, password};
    console.log('here comes the value', value)
    if (value) { // if validation fails, value will be null
      fetch("https://watson-backend.herokuapp.com/api/tokens/sessions/create", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: value.email,
          password: value.password,
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('this is the response', responseData),
        this.onValueChange(STORAGE_KEY, responseData.id_token),
        store.dispatch(currentUser(responseData.user)),
        AlertIOS.alert(
          "Authentication Success!"
        ),
        Actions.homepage()
      })
      .catch(err => console.error('Authentication failed', err))
      .done();
    }
  }

  render() {
    console.log('here comes the state', this.state)
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
                autofocus={true}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                style={styles.inputField}
                />
              </InputGroup>
              <InputGroup borderType="rounded" style={styles.inputCreds}>
                <Icon name="ios-lock-outline"/>
                <Input
                placeholder="password"
                secureTextEntry
                autofocus={true}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                style={styles.inputField}
                />
              </InputGroup>
              <Row>
                <Content>
                  <Button rounded block info style={styles.login} onPress={this._userLogin}>
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


/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    allUsers: state.currentUser
  };
};

export default connect(mapStateToProps)(Login);


