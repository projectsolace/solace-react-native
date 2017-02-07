import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import store from '../store.native';
import { fetchThreeQuestions } from '../reducer/questions.native';
import { connect } from 'react-redux';
import { BlurView } from 'react-native-blur';

export class QuestionsModal extends Component {

    constructor(props){
      super(props)
    }

    componentDidMount() {
     store.dispatch(fetchThreeQuestions())
    }

  render(){
    const { questions } = this.props;
    return (
      <Image source={{uri: `https://s3.amazonaws.com/watsonapi/images/${this.props.imageId}.jpg`}} style={styles.container} >
        <BlurView blurType="dark" blurAmount={10}>
          <Swiper showsButtons={true} transparent={true} >
              { questions && questions.map(questionObj => (
                <View key={questionObj.id}>
                  <Icon name='ios-close-circle-outline' style={styles.closeButton} onPress={Actions.pop} ></Icon>
                  <Text style={styles.text}> {questionObj.question}</Text>
                </View>
                )
              )}
          </Swiper>
        </BlurView>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    opacity: 0.85,
  },
  closeButton: {
    fontSize: 30,
    textAlign: 'right',
    marginTop: 35,
    marginRight: 20,
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 25,
    marginLeft: 30,
    marginRight: 30,
    top: 225,
    textAlign: 'center',
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
    questions: state.questions,
    imageId: state.admin.imageId
  };
};

export default connect(mapStateToProps)(QuestionsModal);
