import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import MainButton from '../components/MainButton';

const LoginScreen = () => {
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = useState('');
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
        <Text style={styles.titleText}>Welcome back!</Text>
        <View style={{ paddingVertical: 8 }} />
        <MainButton
          buttonTitle={'Continue with Steam'}
          navigateTo={''}
          buttonStyle={{ backgroundColor: 'white' }}
          textStyle={{}}
        />
        <View style={{ paddingVertical: 8 }} />
        <MainButton
          buttonTitle={'Continue with Epic Games'}
          navigateTo={''}
          buttonStyle={{ backgroundColor: 'white' }}
          textStyle={{}}
        />
        <View style={{ paddingVertical: 8 }} />
        <MainButton
          buttonTitle={'Continue with Apple'}
          navigateTo={''}
          buttonStyle={{ backgroundColor: 'white' }}
          textStyle={{}}
        />
        <View style={{ paddingVertical: 4 }} />
        <Text>OR</Text>
        <TextInput
          placeholder="Email Address"
          style={[styles.input, { width: SCREEN_WIDTH }]}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          placeholder="Password"
          style={[styles.input, { width: SCREEN_WIDTH }]}
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry
        />
        <MainButton
          buttonTitle={'Login'}
          navigateTo={'Onboarding'}
          buttonStyle={{ backgroundColor: '#545769' }}
          textStyle={{ color: 'white' }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.dontHaveText}>Don't have an account</Text>
        <TouchableWithoutFeedback onPress={() => {}}>
          <Text style={styles.signUpText}> Sign up</Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  itemContainer: {
    flex: 1,
    paddingVertical: 80,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleText: {
    fontWeight: '600',
    fontSize: 24,
    color: '#131623',
  },
  itemTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'black',
  },
  itemText: {
    textAlign: 'center',
    marginHorizontal: 35,
    color: 'black',
    lineHeight: 20,
  },
  dontHaveText: {
    color: '#131623',
    fontWeight: '400',
    fontSize: 16,
  },
  signUpText: {
    color: '#131623',
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    height: 48,
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#DADADA',
    paddingHorizontal: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
  },
});
