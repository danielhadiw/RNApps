import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  label: string | 'Hello';
};

const BaseTextDivider = ({ label }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.dividers} />
      <View>
        <Text style={styles.text}>{label}</Text>
      </View>
      <View style={styles.dividers} />
    </View>
  );
};

export default BaseTextDivider;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividers: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  text: {
    width: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
