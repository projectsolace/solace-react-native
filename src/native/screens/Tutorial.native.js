import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';

export class Tutorial extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View>
        <Swiper showsButtons={true} prevButton transparent={true}>
          <View style={styles.imageContainer}>
            <Image source={require('../../../images/tutorial-1.png')} style={styles.image}>
              <Button transparent style={styles.button} onPress={Actions.pop}>
                <Icon name="ios-close-circle-outline" style={{fontSize: 30}} ></Icon>
              </Button>
            </Image>
          </View>

          <View style={styles.imageContainer}>
            <Image source={require('../../../images/tutorial-2.png')} style={styles.image}>
              <Button transparent style={styles.button} onPress={Actions.pop}>
                <Icon name="ios-close-circle-outline" style={{fontSize: 30}} ></Icon>
              </Button>
            </Image>
          </View>

          <View style={styles.imageContainer}>
            <Image source={require('../../../images/tutorial-3.png')} style={styles.image}>
              <Button transparent style={styles.button} onPress={Actions.pop}>
                <Icon name="ios-close-circle-outline" style={{fontSize: 30}} ></Icon>
              </Button>
            </Image>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'contain'
  },
  button: {
    marginTop: 35,
    marginLeft: 510
  }
});

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    imageId: state.admin.imageId
  };
};

export default connect(mapStateToProps)(Tutorial);
