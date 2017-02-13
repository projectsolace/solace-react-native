import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, AlertIOS} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, List, ListItem, InputGroup, Input, Icon, Picker, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { updateCurrentUser } from '../reducer/user.native';
import { BlurView } from 'react-native-blur';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Spinner from 'react-native-spinkit';
import {occupation, income, ethnicity, religion, education, maritalStatus } from '../utils/dataList';

const Item = Picker.Item;

class CompleteProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      occupation: 'Select',
      incomeLevel: 'Select',
      ethnicity: 'Select',
      religion: 'Select',
      education: 'Select',
      maritalStatus: 'Select',
      gender: 'Select',
      zipCode: '',
      loading: true
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onPressUpdate = this.onPressUpdate.bind(this);
    this.loadSpinner = this.loadSpinner.bind(this);
    this.mapOptionsList = this.mapOptionsList.bind(this);
  }

  onValueChange(value, type) {
    const category = type;
    this.setState({ [category]: value });
  }

  onPressUpdate() {
    const { loggedInUser, updateCurrentUser } = this.props;
    const infoToUpdate = {};
    for (let props in this.state) {
      if (this.state[props] !== 'Select' && this.state[props] && props !== 'loading') {
        infoToUpdate[props] = props === 'zipCode' ? +this.state[props] : this.state[props];
      }
    }

    updateCurrentUser(loggedInUser.id, infoToUpdate);
    AlertIOS.alert('Profile Updated!')
  }

  loadSpinner() {
    this.setState({ loading: !this.state.loading })
  }

  mapOptionsList(optionsList){
    return optionsList.map((option, i) => {
      return (
        <Item label={ option } value={ option } key={ i } />
      );
    });
  };

  render() {

    let occupationList = this.mapOptionsList(occupation);
    let incomeList = this.mapOptionsList(income);
    let ethnicityList = this.mapOptionsList(ethnicity);
    let religionList  = this.mapOptionsList(religion);
    let educationList  = this.mapOptionsList(education);
    let maritalStatusList = this.mapOptionsList(maritalStatus);

    return (
      <View style={styles.container} >
        <Image source={{uri:'https://s3.amazonaws.com/watsonapi/images/12.jpg'}} onLoad={this.loadSpinner} style={ styles.img } >
        {this.state.loading ?
          (<View style={styles.spinView}>
            <Spinner type={'Wave'} isVisible={ this.state.loading } size={40} color={'#4AB1D3'} />
           </View>)
          : (<BlurView blurType="dark" style={styles.blurContainer}>
            <KeyboardAwareScrollView>
              <Grid>
                <Row size={18}>
                  <Content style={{ alignSelf: "center", marginTop: 45, marginBottom: 25 }}>
                    <Text style={styles.inputField}>
                    Complete your profile!
                    </Text>
                  </Content>
                </Row>
                <Row size={82}>
                  <Content>
                    <List>
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
                      <ListItem>
                        <InputGroup style={styles.content}>
                          <Icon name="ios-navigate-outline" style={{ color: '#0A69FE', marginRight: -5}} />
                          <Input
                          style={styles.textInput}
                          placeholderTextColor= "#C7C7CD"
                          keyboardType = "numeric"
                          maxLength={5}
                          placeholder="Zip Code"
                          value={this.state.zipCode}
                          onChangeText={(zipCode) => this.setState({ zipCode })}
                          />
                        </InputGroup>
                      </ListItem>
                    </List>
                    <Row>
                      <Col>
                        <Button success rounded onPress={ this.onPressUpdate }style={ styles.button }>
                          Save
                        </Button>
                      </Col>
                      <Col>
                        <Button iconRight rounded info onPress={ Actions.homepage } style={ styles.button }>
                          Skip <Icon name="ios-arrow-forward" style={{marginLeft: -20}}/>
                        </Button>
                      </Col>
                    </Row>
                  </Content>
                </Row>
              </Grid>
            </KeyboardAwareScrollView>
          </BlurView> )}
        </Image>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)',
    resizeMode: 'cover',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
  },
  blurContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
    paddingHorizontal: 10
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
    fontFamily: 'Helvetica',
    color: 'white',
    marginLeft: 5,
    fontWeight: 'bold'
  },
  textInput: {
    color: '#A9A9A9',
    fontSize: 16,
    fontFamily: 'Helvetica'
  },
  inputField: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Helvetica',
    color: 'white',
    fontWeight: 'bold'
  },
  button: {
    height: 66,
    width: 70,
    alignSelf: 'center',
    marginTop: 20
  },
  spinView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'black'
  }
});




/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.user
  };
};

const mapDispatchToProps = ({ updateCurrentUser });

export default connect(mapStateToProps, mapDispatchToProps)(CompleteProfile);

