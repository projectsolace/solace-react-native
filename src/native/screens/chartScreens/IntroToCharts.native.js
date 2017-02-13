import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import { BlurView } from 'react-native-blur';

const IntroToCharts = ({imageId}) => {

  return (
    <Image source={{uri: `https://s3.amazonaws.com/watsonapi/images/${imageId}.jpg`}} style={styles.container} >
      <BlurView blurType="dark" blurAmount={10}>
        <Swiper showsButtons={true} prevButton transparent={true}>
          <View>
            <Icon name="ios-close-circle-outline" style={styles.closeButton} onPress={Actions.pop} />
            <Text style={styles.firstText}>
              No data yet. {'\n'}
              Go ahead and start recording! {'\n'}
              Once you have some data...
            </Text>
          </View>
          <View>
            <Icon name="ios-close-circle-outline" style={styles.closeButton} onPress={Actions.pop} />
            <Text style={styles.secondText}>
              Click the "Average" options for more accurate data...
            </Text>
          </View>
          <View>
            <Text style={styles.lastText}>
              Click the "Total" options to compare your data over time
            </Text>
            <Button rounded info style={styles.button} onPress={Actions.pop}>
              Got it!
            </Button>
          </View>
        </Swiper>
      </BlurView>
    </Image>
  );
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
  firstText: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
    marginLeft: 20,
    marginRight: 20,
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
  },
  secondText: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
    marginLeft: 20,
    marginRight: 20,
    top: 240,
    textAlign: 'center',
    fontWeight: 'bold',
    shadowColor: '#000000',
    shadowOffset: {
     width: 0,
     height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  lastText: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
    marginLeft: 20,
    marginRight: 20,
    top: 300,
    textAlign: 'center',
    fontWeight: 'bold',
    shadowColor: '#000000',
    shadowOffset: {
     width: 0,
     height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  button: {
    alignSelf: 'center',
    marginTop: 325
  }
});

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (state) => {
  return {
    imageId: state.admin.imageId
  };
};

export default connect(mapStateToProps)(IntroToCharts);
