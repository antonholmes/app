import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#808080',
    paddingRight: 5,
    paddingLeft: 10,
    fontSize: 15,
    lineHeight: 23,
    flex: 1,
  },
  labelStyle: {
    color: '#808080',
    fontSize: 12,
    paddingLeft: 9,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 2,
    flexDirection: 'column',
  },
};

export { Input };
