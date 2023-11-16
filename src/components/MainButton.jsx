import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const MainButton = ({ buttonTitle, navigateTo, buttonStyle, textStyle }) => {
  const navigation = useNavigation();
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  return (
    <View style={[styles.container, { width: SCREEN_WIDTH }]}>
      <TouchableOpacity
        style={[styles.button, buttonStyle]}
        onPress={() => navigation.navigate(navigateTo)}
      >
        <Text style={[styles.titleText, textStyle]}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 12,
    borderWidth: 1,
    borderColor: '#545769',
    borderRadius: 4,
  },
  titleText: {
    color: '#545769',
    fontSize: 16,
    textAlign: 'center',
  },
  textButton: { color: 'white', fontSize: 16, position: 'absolute' },
});
