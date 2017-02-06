import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, AlertIOS, AsyncStorage} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, InputGroup, Input, Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { currentUser } from '../reducer/user.native'
import store from '../store.native';
import { checkEmail } from '../utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
        if (value) { // if validation fails, value will be null
          fetch("https://solace-admin.herokuapp.com/api/tokens/sessions/create", {
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
            if(!responseData.id_token) {
              AlertIOS.alert("Invalid Username")
            } else {

              console.log('this is the response', responseData),
              this.onValueChange(STORAGE_KEY, responseData.id_token),
              store.dispatch(currentUser(responseData.user)),
              AlertIOS.alert(
                "Authentication Success!"
              ),
              Actions.homepage()
            }
          })
          .catch(err => {
            AlertIOS.alert("Invalid Password")
          })
          .done();
        }

  }

  render() {
    return (
      <Image source={{uri: `https://s3.amazonaws.com/watsonapi/images/3.jpg`}} style={ styles.container } >
        <KeyboardAwareScrollView style={{marginTop: 36}}>
          <Grid>
          <Row size={30}>
          <View style={styles.content}>
            <Image source={require('../../images/solace.png')}></Image>
          </View>
          </Row>
          <Row size={70}>
          <Content>
            <InputGroup borderType="rounded" style={styles.inputCreds}>
              <Icon name="ios-person-outline" style={{color: 'white'}}/>
              <Input
              autoCapitalize="none"
              placeholder="email"
              placeholderTextColor="#F0FFFF"
              autofocus={true}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              style={styles.inputField}
              />
              {this.state.email === '' ? null : checkEmail(this.state.email) ? <Icon name='ios-checkmark-circle' style={{color:'#00C497'}}/> :  <Icon name='ios-close-circle' style={{color:'red'}}/>}
            </InputGroup>
            <InputGroup borderType="rounded" style={styles.inputCreds}>
              <Icon name="ios-lock-outline" style={{color: 'white'}}/>
              <Input
              secureTextEntry={true}
              placeholder="password"
              secureTextEntry
              autofocus={true}
              autoCapitalize="none"
              placeholderTextColor="#F0FFFF"
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
            <Row style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
              <Button transparent style={{ paddingRight: 20, marginTop: 15 }}>
                <Text style={{fontWeight: 'bold', color: 'white', fontSize: 14, textAlign: 'center'}} onPress={ Actions.signup} >
                  Create Account
                </Text>
              </Button>
            </Row>
            </Content>
          </Row>
          </Grid>
        </KeyboardAwareScrollView>
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
  field: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 25
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
    user: state.user
  };
};

export default connect(mapStateToProps)(Login);
