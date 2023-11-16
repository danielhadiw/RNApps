import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

type Props = {
  value: string;
  inputMode?: 'email' | 'search' | 'url';
  secureTextEntry?: boolean;
  placeholder?: string;
  onChangeText: (text: string) => void;
};

const BaseTextInput = ({ value, inputMode, secureTextEntry, placeholder, onChangeText }: Props) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      inputMode={inputMode}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

export default BaseTextInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#DADADA',
    width: '100%',
    height: 'auto',
    margin: 12,
    borderRadius: 4,
    paddingVertical: 10,
    paddingRight: 4,
    paddingLeft: 16,
  },
});
