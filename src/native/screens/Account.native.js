import React, { Component } from 'react';
import { StyleSheet, Text, AlertIOS } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, List, ListItem, InputGroup, Input, Icon, Picker, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { updateCurrentUser, logoutUser } from '../reducer/user.native';

const Item = Picker.Item;


let occupation = ['Select', 'Sales', 'Hospitality', 'Healthcare', 'Custodial', 'Accounting', 'Teaching', 'Law-Enforcement', 'Law', 'Finance', 'Engineering', 'Administration', 'Student', 'Other'];

let income = ['Select', 'Under-$15,000', '$15,000-to-$24,999', '$25,000-to-$34,999', '$35,000-to-$49,999', '$50,000-to-$74,999', '$75,000-to-$99,999', '$100,000-to-$149,999', '$150,000-to-$199,999', '$200,000-and-over'];

let ethnicity = ['Select', 'White', 'Black', 'Hispanic', 'Asian', 'American-Indian/Alaska-Native', 'Hawaiian/Other-Pacific-Islander', 'Other'];

let religion = ['Select', 'Protestant', 'Catholic', 'Mormon', 'Judaism', 'Islam', 'Buddhism', 'Hinduism', 'Other', 'Unaffiliated'];

let education = ['Select', 'High-School', 'Some-College', 'Associate-Degree', 'Bachelor-Degree', 'Advanced-Degree'];

let maritalStatus = ['Select', 'Single', 'Married', 'Widowed', 'Divorced'];


class Account extends Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      occupation: user.occupation || 'Select',
      incomeLevel: user.incomeLevel || 'Select',
      ethnicity: user.ethnicity || 'Select',
      religion: user.religion || 'Select',
      education: user.education || 'Select',
      maritalStatus: user.maritalStatus || 'Select',
      gender: user.gender || 'Select',
      zipCode: user.zipCode + '' || '',
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onPressUpdate = this.onPressUpdate.bind(this);
    console.log('here comes the user', this.props);
  }

  onValueChange(value, type) {
    const category = type;
    this.setState({ [category]: value });
  }

  onPressUpdate() {
    const { user, updateCurrentUser } = this.props;
    const infoToUpdate = {};
    for (let props in this.state) {
      if (this.state[props] !== 'Select' && this.state[props]) {
        infoToUpdate[props] = props === 'zipCode' ? +this.state[props] : this.state[props];
      }
    }
    console.log('this is the info', infoToUpdate);
    console.log('this is the user', user);

    updateCurrentUser(user.id, infoToUpdate);
    AlertIOS.alert("Update Success!");
  }

  render() {
    const { logoutUser } = this.props;

    let occupationList = occupation.map((job, i) => {
      return (
        <Item label={ job } value={ job } key={ i } />
      );
    });

    let incomeList = income.map((salary, i) => {
      return (
        <Item label={ salary } value={ salary } key={ i } />
      );
    });

    let ethnicityList = ethnicity.map((background, i) => {
      return (
        <Item label={ background } value={ background } key={ i } />
      );
    });

    let religionList = religion.map((belief, i) => {
      return (
        <Item label={ belief } value={ belief } key={ i } />
      );
    });

    let educationList = education.map((school, i) => {
      return (
        <Item label={ school } value={ school } key={ i } />
      );
    });

    let maritalStatusList = maritalStatus.map((status, i) => {
      return (
        <Item label={ status } value={ status } key={ i } />
      );
    });

    return (
      <Grid>
        <Row size={18}>
          <Content style={{ alignSelf: 'center' }}>
            <Text style={styles.inputField}>
            Profile
            </Text>
          </Content>
        </Row>
        <Row size={82}>
          <Content>
            <List>
              <ListItem>
                <InputGroup style={styles.content}>
                  <Icon name="ios-navigate-outline" style={{ color: '#0A69FE', marginRight: -5}} />
                  <Input
                  style={{ fontFamily: 'HelveticaNeue-Medium'}}
                  placeholderTextColor= "#C7C7CD"
                  keyboardType = "numeric"
                  maxLength={5}
                  placeholder="Zip Code"
                  value={this.state.zipCode}
                  onChangeText={(zipCode) => this.setState({ zipCode })}
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup style={styles.content}>
                  <Icon name="ios-person-outline" style={{ color: '#0A69FE', marginRight: -5}} />
                  <Input
                  style={{ fontFamily: 'HelveticaNeue-Medium'}}
                  placeholderTextColor= "#C7C7CD"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChangeText={(firstName) => this.setState({ firstName })}
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup style={styles.content}>
                  <Icon name="ios-person-outline" style={{ color: '#0A69FE', marginRight: -5}} />
                  <Input
                  style={{ fontFamily: 'HelveticaNeue-Medium'}}
                  placeholderTextColor= "#C7C7CD"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChangeText={(lastName) => this.setState({ lastName })}
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup style={styles.content}>
                  <Icon name="ios-mail" style={{ color: '#0A69FE', marginRight: -5}} />
                  <Input
                  style={{ fontFamily: 'HelveticaNeue-Medium'}}
                  placeholderTextColor= "#C7C7CD"
                  placeholder="Email"
                  value={this.state.email}
                  onChangeText={(email) => this.setState({ email })}
                  />
                </InputGroup>
              </ListItem>
              <ListItem iconLeft style={ styles.list }>
                <Icon name="ios-briefcase" style={{ color: '#0A69FE' }} />
                <Text style={ styles.text }>Occupation</Text>
                <Picker
                  iosHeader="Occupation"
                  mode="dropdown"
                  selectedValue={ this.state.occupation }
                  onValueChange={ (val) => this.onValueChange(val, 'occupation') } >
                    {occupationList}
                </Picker>
              </ListItem>
              <ListItem iconLeft style={styles.list}>
                <Icon name="md-cash" style={{ color: '#0A69FE' }} />
                <Text style={ styles.text }>Income</Text>
                <Picker
                  iosHeader="Income"
                  mode="dropdown"
                  selectedValue={ this.state.incomeLevel }
                  onValueChange={ (val) => this.onValueChange(val, 'incomeLevel') } >
                    {incomeList}
                </Picker>
              </ListItem>
              <ListItem iconLeft style={styles.list}>
                <Icon name="md-globe" style={{ color: '#0A69FE' }} />
                <Text style={ styles.text }>Ethnicity</Text>
                <Picker
                  iosHeader="Ethnicity"
                  mode="dropdown"
                  selectedValue={ this.state.ethnicity }
                  onValueChange={ (val) => this.onValueChange(val, 'ethnicity') } >
                    {ethnicityList}
                </Picker>
              </ListItem>
              <ListItem iconLeft style={styles.list}>
                <Icon name="ios-flower-outline" style={{ color: '#0A69FE' }} />
                <Text style={ styles.text }>Religion</Text>
                <Picker
                  iosHeader="Religion"
                  mode="dropdown"
                  selectedValue={ this.state.religion }
                  onValueChange={ (val) => this.onValueChange(val, 'religion') } >
                    {religionList}
                </Picker>
              </ListItem>
              <ListItem iconLeft style={styles.list}>
                <Icon name="ios-school" style={{ color: '#0A69FE' }} />
                <Text style={ styles.text }>Education</Text>
                <Picker
                  iosHeader="Education"
                  mode="dropdown"
                  selectedValue={ this.state.education }
                  onValueChange={ (val) => this.onValueChange(val, 'education') } >
                    {educationList}
                </Picker>
              </ListItem>
              <ListItem iconLeft style={styles.list}>
                <Icon name="ios-contacts-outline" style={{ color: '#0A69FE' }} />
                <Text style={ styles.text }>Marital Status</Text>
                <Picker
                  iosHeader="Marital Status"
                  mode="dropdown"
                  selectedValue={ this.state.maritalStatus }
                  onValueChange={ (val) => this.onValueChange(val, 'maritalStatus') } >
                    {maritalStatusList}
                </Picker>
              </ListItem>
              <ListItem iconLeft style={styles.list}>
                <Icon name="ios-transgender" style={{ color: '#0A69FE' }} />
                <Text style={ styles.text }>Gender</Text>
                <Picker
                  iosHeader="Gender"
                  mode="dropdown"
                  selectedValue={ this.state.gender }
                  onValueChange={ (val) => this.onValueChange(val, 'gender') } >
                    <Item label="Select" value="Select" />
                    <Item label="Male" value="Male" />
                    <Item label="Female" value="Female" />
                </Picker>
              </ListItem>
            </List>
            <Row>
              <Col>
                <Button success onPress={ this.onPressUpdate }style={{ alignSelf: 'center', marginTop: 30}}>
                  Update
                </Button>
              </Col>
              <Col>
                <Button iconRight info onPress={ logoutUser } style={{ alignSelf: 'center', marginTop: 30}}>
                  Signout
                  <Icon name="ios-arrow-forward" />
                </Button>
              </Col>
            </Row>
          </Content>
        </Row>
      </Grid>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    resizeMode: 'stretch'
  },
  content: {
    padding: 8,
    marginLeft: -2,
    marginRight: 12
  },
  list: {
    padding: 8,
    marginRight: 12
  },
  text: {
    fontSize: 16,
    fontFamily: 'HelveticaNeue-Medium',
    color: '#C7C7CD',
    marginLeft: 5
  },
  inputField: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Helvetica',
    color: 'black',
    marginTop: 40,
    marginBottom: 20
  },
  inputCreds: {
    paddingLeft: 15,
    marginBottom: 17,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderColor: 'rgba(0,0,0,0)'
  }
});

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = ({ updateCurrentUser, logoutUser });

export default connect(mapStateToProps, mapDispatchToProps)(Account);
