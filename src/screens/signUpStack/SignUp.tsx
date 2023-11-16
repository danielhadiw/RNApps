import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import BaseButton from '../../components/atoms/buttons/BaseButton';
import BaseTextDivider from '../../components/atoms/dividers/BaseTextDivider';
import BaseTextInput from '../../components/atoms/inputs/BaseTextInput';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const SignUp = (props: Props) => {
  const [email, setEmail] = useState<string>('');
  const [warning, setWarning] = useState<string>('');
  const navigation = useNavigation();

  const onSignUp = () => {
    if (email === '') {
      return setWarning('Please enter an email address');
    }
    return navigation.navigate('Password');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create an account</Text>
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
      {warning !== '' && (
        <View style={{display: 'flex', flexDirection: 'row', width:'100%', alignItems: "flex-start"}}>
          <Text style={{ color: 'grey' }}>{warning}</Text>
        </View>
      )}
      <BaseButton
        label="Continue"
        style={{ backgroundColor: '#545769' }}
        labelStyle={{ color: '#fff' }}
        onPress={onSignUp}
      />
      <View style={styles.bottomContainer}>
        <Text style={{}}>
          By signing up, you agree with our{' '}
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('');
            }}
          >
            <Text style={styles.signUpText}>Terms of Service</Text>
          </TouchableWithoutFeedback>{' '}
          and{' '}
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('');
            }}
          >
            <Text style={styles.signUpText}>Privacy Policy</Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text>Already have an acoount?</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text style={styles.signUpText}> Login</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: windowHeight,
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 30,
  },
  signUpText: {
    color: '#131623',
    fontSize: 16,
    fontWeight: '600',
  },
});
