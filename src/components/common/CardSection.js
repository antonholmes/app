import React from 'react';
import { View } from 'react-native';

const CardSection = props => {
  return (
    <View style={[styles.containerStyle, props.style]}>{props.children}</View>
  );
};

const styles = {
  containerStyle: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e6ecf5',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

export { CardSection };
