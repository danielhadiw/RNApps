import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import BaseButton from '../components/atoms/buttons/BaseButton';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const CELL_COUNT = 6;

const VerificationScreen = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
        <Text style={styles.titleText}>Verify that this is you</Text>
        <View style={{ width: 256 }}>
          <Text style={{ fontSize: 14, fontWeight: '400', color: '#545769' }}>
            Check your inbox or spam folder for the verification code we sent to your email
          </Text>
        </View>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <BaseButton
          label="Confirm"
          style={{ backgroundColor: '#545769' }}
          labelStyle={{ color: '#fff', fontWeight: '600' }}
          onPress={() => navigation.navigate('Onboarding')}
        />
        <View
          style={{ flex: 1, flexDirection: 'row', alignContent: 'center', textAlign: 'center' }}
        >
          <Text style={{ fontWeight: '400', color: '#545769', fontSize: 16 }}>
            Didn't get a code?
          </Text>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Text style={styles.boldText}> Resend</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  itemContainer: {
    flex: 1,
    paddingVertical: 72,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleText: {
    fontWeight: '600',
    fontSize: 24,
    color: '#131623',
    paddingBottom: 8,
  },
  boldText: {
    color: '#131623',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
  },
  codeFieldRoot: { marginTop: 32, marginBottom: 16 },
  cell: {
    width: 48,
    height: 48,
    lineHeight: 38,
    fontSize: 24,
    textAlign: 'center',
    borderRadius: 4,
    marginRight: 8,
    backgroundColor: '#DADADA',
  },
  focusCell: {
    borderColor: '#000',
  },
});
