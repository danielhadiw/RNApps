import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import COLORS from '../conts/colors';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface InputProps {
  label: string;
  error: boolean;
  password: boolean;
  onFocus: () => void;
}
const Input = ({ label, error, password, onFocus = () => {}, ...props }: InputProps) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error ? COLORS.red : isFocused ? COLORS.darkBlue : COLORS.light,
            alignItems: 'center',
          },
        ]}
      >
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{ color: COLORS.darkBlue, flex: 1 }}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{ color: COLORS.darkBlue, fontSize: 22 }}
          />
        )}
      </View>
      {error && <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 12 }}>{error}</Text>}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});

export default Input;
