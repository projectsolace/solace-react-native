import React, { Component } from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { Row, Grid } from 'react-native-easy-grid';
import { Content, InputGroup, Input, Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { registerUser } from '../reducer/UserReducer.native';
import { connect } from 'react-redux';
// import { BlurView, VibrancyView } from 'react-native-blur';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      email: ''
    };
    this.onUserSubmit = this.onUserSubmit.bind(this);
  }

  onUserSubmit() {
    const { firstName, lastName, password, email } = this.state;
    let userInfo = {
      firstName,
      lastName,
      password,
      email
    };

    console.log('userInfo', userInfo);

    registerUser(userInfo);

    Actions.pop();
  }

   render() {
    console.log('these are the props', this.props);
    console.log('this is the state', this.state);

    return (
      <Image source={ require('../../../images/sky.jpeg')} style={ styles.container } >
        <Grid>
          <Row style={styles.content}>
            <Text style={styles.text}>
              Sign up!
            </Text>
          </Row>
          <Row>
            <Content>
              <InputGroup borderType="rounded" style={styles.inputCreds}>
                <Icon name="ios-person-outline"/>
                <Input
                autofocus={true}
                value={this.state.firstName}
                onChangeText={firstName => this.setState({ firstName })}
                placeholder="first name"
                style={styles.inputField}
                />
              </InputGroup>
              <InputGroup borderType="rounded" style={styles.inputCreds}>
                <Icon name="ios-person-outline"/>
                <Input
                autofocus={true}
                value={this.state.lastName}
                onChangeText={lastName => this.setState({ lastName })}
                placeholder="last name"
                style={styles.inputField}
                />
              </InputGroup>
              <InputGroup borderType="rounded" style={styles.inputCreds}>
                <Icon name="ios-mail"/>
                <Input
                autofocus={true}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                placeholder="email"
                style={styles.inputField}
                />
              </InputGroup>
              <InputGroup borderType="rounded" style={styles.inputCreds}>
                <Icon name="ios-lock-outline"/>
                <Input
                autofocus={true}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                placeholder="password"
                style={styles.inputField}
                />
              </InputGroup>
              <Row>
                <Content>
                  <Button rounded block success style={styles.login} onPress={this.onUserSubmit}>
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
    marginTop: 20
  }
});


/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    allUsers: state.currentUser
  };
};

const mapDispatchToProps = { registerUser };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
