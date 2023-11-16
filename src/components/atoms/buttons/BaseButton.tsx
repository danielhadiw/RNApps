import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
  label: string;
  style?: object;
  labelStyle?: object;
};

const BaseButton = ({ label, onPress, style, labelStyle }: Props) => {
  return (
    <Pressable onPress={onPress} style={{ ...styles.button, ...style }}>
      <Text style={labelStyle ? {...labelStyle} : {}}>{label}</Text>
    </Pressable>
  );
};

export default BaseButton;

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    width: "100%",
    height: 'auto',
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: "16px",
    borderWidth: 1,
    borderColor: '#545769',
    borderRadius: 4,
  },
});
