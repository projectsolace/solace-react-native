import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, AlertIOS, AsyncStorage } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Picker, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { currentUser } from '../reducer/UserReducer.native'
import store from '../store.native';

const Item = Picker.Item;


let occupation = ['Select', 'Sales', 'Hospitality', 'Healthcare', 'Custodial', 'Accounting', 'Teaching', 'Law-Enforcement', 'Law', 'Finance', 'Engineering', 'Administration', 'Student', 'Other'];

let income = ['Select', 'Under-$15,000', '$15,000-to-$24,999', '$25,000-to-$34,999', '$35,000-to-$49,999', '$50,000-to-$74,999', '$75,000-to-$99,999', '$100,000-to-$149,999', '$150,000-to-$199,999', '$200,000-and-over'];

let ethnicity = ['Select', 'White', 'Black', 'Hispanic', 'Asian', 'American-Indian/Alaska-Native', 'Hawaiian/Other-Pacific-Islander', 'Other'];

let religion = ['Select', 'Protestant', 'Catholic', 'Mormon', 'Judaism', 'Islam', 'Buddhism', 'Hinduism', 'Other', 'Unaffiliated'];

let education = ['Select', 'High-School', 'Some-College', 'Associate-Degree', 'Bachelor-Degree', 'Advanced-Degree'];

let maritialStatus = ['Select', 'Single', 'Married', 'Widowed', 'Divorced'];


class newUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      occupation: 'Select',
      income: 'Select',
      ethnicity: 'Select',
      religion: 'Select',
      education: 'Select',
      maritialStatus: 'Select',
      gender: 'key0'
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(value, type) {
    const category = type;
    this.setState({ [category]: value })
  }

  render() {

    let occupationList = occupation.map((job, i) => {
      return (
        <Item label={ job } value={ job } key={ i } />
      )
    })

    let incomeList = income.map((salary, i) => {
      return (
        <Item label={ salary } value={ salary } key={ i } />
      )
    })

    let ethnicityList = ethnicity.map((background, i) => {
      return (
        <Item label={ background } value={ background } key={ i } />
      )
    })

    let religionList = religion.map((belief, i) => {
      return (
        <Item label={ belief } value={ belief } key={ i } />
      )
    })

    let educationList = education.map((school, i) => {
      return (
        <Item label={ school } value={ school } key={ i } />
      )
    })

    let maritialStatusList = maritialStatus.map((status, i) => {
      return (
        <Item label={ status } value={ status } key={ i } />
      )
    })

    return (
      <Container>
          <Content>
              <List>
                <ListItem iconLeft>
                    <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                    <Text>Occupation</Text>
                    <Picker
                      iosHeader="Occupation"
                      mode="dropdown"
                      selectedValue={ this.state.occupation }
                      onValueChange={ (val) => this.onValueChange(val, 'occupation') } >
                        {occupationList}
                    </Picker>
                </ListItem>
                <ListItem iconLeft>
                    <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                    <Text>Income</Text>
                    <Picker
                      iosHeader="income"
                      mode="dropdown"
                      selectedValue={ this.state.income }
                      onValueChange={ (val) => this.onValueChange(val, 'income') } >
                        {incomeList}
                    </Picker>
                </ListItem>
                <ListItem iconLeft>
                    <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                    <Text>Ethnicity</Text>
                    <Picker
                      iosHeader="ethnicity"
                      mode="dropdown"
                      selectedValue={ this.state.ethnicity }
                      onValueChange={ (val) => this.onValueChange(val, 'ethnicity') } >
                        {ethnicityList}
                    </Picker>
                </ListItem>
                <ListItem iconLeft>
                    <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                    <Text>Religion</Text>
                    <Picker
                      iosHeader="religion"
                      mode="dropdown"
                      selectedValue={ this.state.religion }
                      onValueChange={ (val) => this.onValueChange(val, 'religion') } >
                        {religionList}
                    </Picker>
                </ListItem>
                <ListItem iconLeft>
                    <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                    <Text>Education</Text>
                    <Picker
                      iosHeader="education"
                      mode="dropdown"
                      selectedValue={ this.state.education }
                      onValueChange={ (val) => this.onValueChange(val, 'education') } >
                        {educationList}
                    </Picker>
                </ListItem>
                <ListItem iconLeft>
                    <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                    <Text>Maritial Status</Text>
                    <Picker
                      iosHeader="Maritial Status"
                      mode="dropdown"
                      selectedValue={ this.state.maritialStatus }
                      onValueChange={ (val) => this.onValueChange(val, 'maritialStatus') } >
                        {maritialStatusList}
                    </Picker>
                </ListItem>
                <ListItem iconLeft>
                    <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                    <Text>Gender</Text>
                    <Picker
                      iosHeader="Maritial Status"
                      mode="dropdown"
                      selectedValue={ this.state.gender }
                      onValueChange={ (val) => this.onValueChange(val, 'gender') } >
                        <Item label="Male" value="key0" />
                        <Item label="Female" value="key1" />
                    </Picker>
                </ListItem>
              </List>
              <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                  Skip
              </Button>
          </Content>
      </Container>
    );
  }
}




/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.currentUser
  };
};

export default connect(mapStateToProps)(newUserInfo);

