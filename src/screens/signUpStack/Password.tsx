import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import BaseTextInput from '../../components/atoms/inputs/BaseTextInput';
import BaseButton from '../../components/atoms/buttons/BaseButton';
import { useNavigation } from '@react-navigation/native';

type Props = {};

const Password = (props: Props) => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [warning, setWarning] = useState<string>('');
  const navigation = useNavigation();

  const verifyPassword = () => {
    switch (true) {
      case password === '':
        return setWarning('Please enter a password');
      case password !== confirmPassword:
        return setWarning('Passwords do not match');
      case password.length < 8:
        return setWarning('Password must be at least 8 characters');
      case password.search(/[a-z]/i) < 0:
        return setWarning('Password must contain at least one letter');
      case password.search(/[0-9]/) < 0:
        return setWarning('Password must contain at least one number');
      case password.search(/[!@#$%^&*]/) < 0:
        return setWarning('Password must contain at least one special character');
      default:
        return navigation.navigate('Onboarding');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Password</Text>
      <BaseTextInput
        value={password}
        secureTextEntry
        onChangeText={(e) => {
          setPassword(e);
        }}
        placeholder="Enter Password"
      />
      <Text>
        Password must have at least 8 characters, including upper case letters, numbers and special
        characters (! “ @ # $ % ‘ () *)
      </Text>
      <BaseTextInput
        value={confirmPassword}
        secureTextEntry
        onChangeText={(e) => {
          setConfirmPassword(e);
        }}
        placeholder="Confirm Password"
      />
      <View
        style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'flex-start' }}
      >
        <Text style={{ color: 'grey' }}>{warning}</Text>
      </View>
      <BaseButton
        style={{ backgroundColor: '#545769' }}
        labelStyle={{ color: '#fff' }}
        label="Create Password"
        onPress={verifyPassword}
      />
    </View>
  );
};

export default Password;

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
});
