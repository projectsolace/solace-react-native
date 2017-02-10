import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, AlertIOS, AsyncStorage } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, InputGroup, Input, Icon, Button } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { currentUser } from '../reducer/user.native'
import store from '../store.native';
import { checkEmail } from '../utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Spinner from 'react-native-spinkit';

const STORAGE_KEY = 'id_token';

 class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false
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
    this.setState({ loading: true });
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
        Actions.homepage()
        }
      })
      .catch(err => {
        Actions.pop() // -----> fix invalid credentials spinner
        AlertIOS.alert("Invalid Password")
      })
      .done();
    }
  }

  render() {
    return (
      <Image source={{uri: `https://s3.amazonaws.com/watsonapi/images/3.jpg`}} style={ styles.container } >
        {!this.state.loading ?
        (<KeyboardAwareScrollView>
          <View style={styles.content}>
            <Image source={require('../../images/solace.png')}></Image>
          </View>
          <View style={styles.inputPosition}>
            <InputGroup borderType="rounded" style={styles.inputCreds}>
              <Icon name="ios-person-outline" style={{color: 'white'}}/>
              <Input
              returnKeyType="next"
              autoCapitalize="none"
              placeholder="email"
              placeholderTextColor="#F0FFFF"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              style={styles.inputField}
              onSubmitEditing={() => this.refs.password._textInput.focus()}
              />
              {this.state.email === '' ? null : checkEmail(this.state.email) ? <Icon name='ios-checkmark-circle' style={{color:'#00C497'}}/> :  <Icon name='ios-close-circle' style={{color:'red'}}/>}
            </InputGroup>
            <InputGroup borderType="rounded" style={styles.inputCreds}>
              <Icon name="ios-lock-outline" style={{color: 'white'}}/>
              <Input
              ref="password"
              secureTextEntry={true}
              placeholder="password"
              secureTextEntry
              returnKeyType="go"
              autoCapitalize="none"
              placeholderTextColor="#F0FFFF"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              style={styles.inputField}
              onSubmitEditing={this._userLogin}
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
            <Row style={styles.account}>
              <Button transparent>
                <Text style={{fontWeight: 'bold', color: 'white', fontSize: 14, textAlign: 'center'}} onPress={Actions.signup} >
                  Create Account
                </Text>
              </Button>
            </Row>
          </View>
        </KeyboardAwareScrollView>)
      : (<View style={styles.spinView}>
        <Spinner type={'Bounce'} isVisible={ this.state.loading } size={40} color={'#4AB1D3'} />
       </View>)}
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
    alignItems: 'center',
    position: 'relative',
    top: 80
  },
  inputPosition: {
    position: 'relative',
    left: 0,
    right: 0,
    top: 324
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
  account: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 20,
    marginTop: 15
  },
  login: {
    marginLeft: 20,
    marginRight: 20
  },
  spinView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});


/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Login);
