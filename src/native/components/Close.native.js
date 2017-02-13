import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default CloseButton = () => {
  return (
    <TouchableOpacity onPress={Actions.pop}>
      <View style={{marginTop: 35, marginLeft: 310, marginBottom: 50}}>
        <Icon name="ios-close-circle-outline" style={{fontSize: 30, color: 'white', textAlign: 'right'}} />
      </View>
    </TouchableOpacity>
  );
}
