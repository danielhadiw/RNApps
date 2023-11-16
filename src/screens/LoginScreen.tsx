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
import BaseButton from '../components/atoms/buttons/BaseButton';
import BaseTextDivider from '../components/atoms/dividers/BaseTextDivider';
import BaseTextInput from '../components/atoms/inputs/BaseTextInput';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
        <Text style={styles.titleText}>Welcome back!</Text>
        <BaseButton label="Continue with Steam" onPress={() => console.log('test')} />
        <BaseButton label="Continue with Epic Steam" onPress={() => console.log('test')} />
        <BaseButton label="Continue with Apple" onPress={() => console.log('test')} />
        <BaseTextDivider label="OR" />
        <BaseTextInput
          placeholder="Email address"
          value={email}
          onChangeText={(e) => setEmail(e)}
          inputMode="email"
        />
        <BaseTextInput
          placeholder="Password"
          value={password}
          onChangeText={(e) => setPassword(e)}
          inputMode="email"
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
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
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
    paddingVertical: 60,
    paddingHorizontal: 16,
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
