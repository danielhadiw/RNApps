import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import Animated, { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
const CustomButton = ({ flatListRef, flatListIndex, dataLength }) => {
  const navigation = useNavigation();

  const buttonAnimationStyle = useAnimatedStyle(() => {
    return {
      width: flatListIndex.value === dataLength - 1 ? withSpring(100) : withSpring(60),
      height: 40,
    };
  });
  const nextAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX: flatListIndex.value === dataLength - 1 ? withTiming(100) : withTiming(0),
        },
      ],
    };
  });
  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX: flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(-100),
        },
      ],
    };
  });
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (flatListIndex.value < dataLength - 1) {
          flatListRef.current.scrollToIndex({ index: flatListIndex.value + 1 });
        } else {
          navigation.navigate('Home');
        }
      }}
    >
      <Animated.View style={[styles.container, buttonAnimationStyle]}>
        <Animated.Text style={[styles.textButton, textAnimationStyle]}>Start using</Animated.Text>
        <Animated.Text style={[styles.nextText, nextAnimationStyle]}>Next</Animated.Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#545769',
    padding: 4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  nextText: {
    position: 'absolute',
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  textButton: { color: 'white', fontSize: 16, position: 'absolute' },
});
