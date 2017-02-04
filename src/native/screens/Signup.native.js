import React, { Component } from 'react';
import { StyleSheet, Text, Image, AlertIOS, AsyncStorage, Dimensions } from 'react-native';
import { Row, Grid } from 'react-native-easy-grid';
import { Content, InputGroup, Input, Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { newUser } from '../reducer/user.native';
import { connect } from 'react-redux';
import store from '../store.native';
import { checkEmail } from '../utils';
// import { BlurView, VibrancyView } from 'react-native-blur';

var STORAGE_KEY = 'id_token';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      email: ''
    };

    this.onValueChange = this.onValueChange.bind(this);
    this._userSignup = this._userSignup.bind(this);
  }

  async onValueChange(item, selectedValue) {
  try {
    await AsyncStorage.setItem(item, selectedValue);
  } catch (error) {
    console.log('AsyncStorage error: ' + error.message);
    }
  }

  _userSignup() {
    const { firstName, lastName, password, email } = this.state;

    if(firstName && lastName && checkEmail(email) && password ){

      let value = {
        firstName,
        lastName,
        password,
        email
      };

      if (value) { // if validation fails, value will be null
        fetch("https://watson-backend.herokuapp.com/api/tokens/signup", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: value.firstName,
            lastName: value.lastName,
            password: value.password,
            email: value.email
          })
        })
        .then((response) => response.json())
        .then((responseData) => {

            this.onValueChange(STORAGE_KEY, responseData.id_token),
            store.dispatch(newUser(responseData.user)),
            AlertIOS.alert(
              "Signup Success!"
            ),
            Actions.completeProfile();
        })
        .catch(err => console.error('signup failed', err))
        .done();
      }
    } else {

       AlertIOS.alert("Invalid Input")
    }
  }

   render() {

    console.log('these are the dimensions', Dimensions.get('window').width);

    return (
      <Image source={{uri:'https://s3.amazonaws.com/watsonapi/images/7.jpg'}} style={ styles.container } >
        <Grid>
          <Row size={30} style={styles.content}>
            <Text style={styles.text}>
              Let's get started!
            </Text>
          </Row>
          <Row size={70}>
            <Content style={{paddingTop: 50}}>
              <InputGroup borderType="rounded" style={styles.inputCreds}>
                <Icon name="ios-person-outline" style={{color: 'white'}}/>
                <Input
                autoCapitalize="none"
                autofocus={true}
                value={this.state.firstName}
                onChangeText={firstName => this.setState({ firstName })}
                placeholder="first name"
                placeholderTextColor="#F0FFFF"
                style={styles.inputField}
                />
                {this.state.firstName !== '' ? <Icon name='ios-checkmark-circle' style={{color:'#00C497'}}/> :  null }
              </InputGroup>
              <InputGroup borderType="rounded" style={styles.inputCreds}>
                <Icon name="ios-person-outline" style={{color: 'white'}}/>
                <Input
                autoCapitalize="none"
                autofocus={true}
                value={this.state.lastName}
                onChangeText={lastName => this.setState({ lastName })}
                placeholder="last name"
                placeholderTextColor="#F0FFFF"
                style={styles.inputField}
                />
                {this.state.lastName !== '' ? <Icon name='ios-checkmark-circle' style={{color:'#00C497'}}/> :  null }
              </InputGroup>
              <InputGroup borderType="rounded" style={styles.inputCreds}>
                <Icon name="ios-mail" style={{color: 'white'}}/>
                <Input
                autoCapitalize="none"
                autofocus={true}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                placeholder="email"
                placeholderTextColor="#F0FFFF"
                style={styles.inputField}
                />
                {this.state.email === '' ? null : checkEmail(this.state.email) ? <Icon name='ios-checkmark-circle' style={{color:'#00C497'}}/> :  <Icon name='ios-close-circle' style={{color:'red'}}/>}
              </InputGroup>
              <InputGroup borderType="rounded" style={styles.inputCreds}>
                <Icon name="ios-lock-outline" style={{color: 'white'}}/>
                <Input
                autoCapitalize="none"
                autofocus={true}
                secureTextEntry
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                placeholder="password"
                placeholderTextColor="#F0FFFF"
                style={styles.inputField}
                />
                {this.state.password !== '' ? <Icon name='ios-checkmark-circle' style={{color:'#00C497'}}/> :  null }
              </InputGroup>
              <Row>
                <Content>
                  <Button rounded block success style={styles.login} onPress={this._userSignup}>
                    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>
                      Continue
                    </Text>
                  </Button>
                </Content>
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
    resizeMode: 'cover'
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
    marginRight: 20,
    marginTop: 40
  }
});


/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.user
  };
};

export default connect(mapStateToProps)(Signup);
