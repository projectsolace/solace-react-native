import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import store from '../store.native';
import { fetchThreeQuestions } from '../reducer/questions.native';
import { connect } from 'react-redux';

export class QuestionsModal extends Component {

    constructor(props){
      super(props)
    }

    componentDidMount() {
     store.dispatch(fetchThreeQuestions())
    }

  render(){
    const { questions } = this.props;
    console.log('here comes the questions', questions)
    return (

      <View >
        <Swiper style={styles.wrapper} showsButtons={true} transparent={true} >
            { questions && questions.map(questionObj => (
               <Image key = {questionObj.id} source={require('../../../images/sky.jpeg')} style={styles.container} >
                <View>
                  <Icon name='ios-close-circle-outline' style = {styles.closeButton } onPress={() => Actions.pop()} ></Icon>
                  <Text style={styles.text}> {questionObj.question}</Text>
                </View>
               </Image>
              )
            )}
        </Swiper>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch',
    opacity: 0.85,

  },
  closeButton: {
    fontSize: 45,
    textAlign: "right",
    marginTop: 35,
    marginRight: 20,
    color: 'white',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25,
    marginLeft: 30,
    marginRight: 30,
    top: 225,
    textAlign:'center',
    fontWeight: 'bold',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0

  }
});

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  };
};

export default connect(mapStateToProps)(QuestionsModal);
