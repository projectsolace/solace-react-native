import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { Icon } from 'native-base';

export default InfoButton = (props) => {
  return (
    <TouchableOpacity
      style={{ alignSelf: 'center', marginTop: props.space || 10 }}
      onPress={() => Alert.alert(
       '',
       props.info
     )}>
      <View style={{ width: 25, height: 25 }}>
       <Icon name="ios-information-circle-outline" style={{ color: 'white' }} />
     </View>
    </TouchableOpacity>
  );
}
