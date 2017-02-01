import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

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
      <View style={styles.container}>

        <Swiper style={styles.wrapper} showsButtons={true}>
            { questions && questions.map(questionObj => (
                <View key = {questionObj.id} style={styles.slide1}>
                  <Text onPress={() => Actions.pop()} > X </Text>
                  <Text style={styles.text}> {questionObj.question}</Text>
                </View>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginLeft: 30,
    marginRight: 30,
    textAlign:'center',
    lineHeight: 30
  }
});

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  };
};

export default connect(mapStateToProps)(QuestionsModal);
