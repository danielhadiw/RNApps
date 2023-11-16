import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import BaseButton from '../../components/atoms/buttons/BaseButton';
import BaseTextDivider from '../../components/atoms/dividers/BaseTextDivider';
import BaseTextInput from '../../components/atoms/inputs/BaseTextInput';

type Props = {};

const SignUp = (props: Props) => {
  const [email, setEmail] = useState<string>('');
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
      <BaseButton
        label="Continue"
        style={{ backgroundColor: '#545769' }}
        labelStyle={{ color: '#fff' }}
        onPress={() => console.log('test')}
      />
      <View style={{ flex: 1, justifyContent: 'space-around'}}>
        <Text style={{}}>
          By signing up, you agree wuth our Terms Of Service and Privacy Policy
        </Text>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: windowHeight,
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
