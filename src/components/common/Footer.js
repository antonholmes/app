import React from 'react';
import { Text, View } from 'react-native';

const Footer = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.footerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    left: 0,
    right: 0,
    bottom: -15,
    backgroundColor: '#0066ff',
    alignItems: 'center',
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    position: 'absolute',
  },
  textStyle: {
    color: '#FFF',
    fontSize: 20,
  },
};
export { Footer };
