import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const PostDetail = ({ onPress, children }) => {
  const { functionStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={functionStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#99cccc',
    fontSize: 10,
    fontWeight: '100',
    paddingTop: 10,
    paddingBottom: 10,
  },
  functionStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5,
  },
};

export default PostDetail;
