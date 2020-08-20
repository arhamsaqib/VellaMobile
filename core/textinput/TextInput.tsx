import React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';

interface PropsTextBox extends TextInputProps {
  returnValue?(text: string): void;
  customStyles?: StyleProp<ViewStyle>;
}

export const TextInputBox = (props: PropsTextBox) => {
  const {returnValue, customStyles, ...rest} = props;
  return (
    <View style={[customStyles, styles.container]}>
      <TextInput style={styles.input} onChangeText={returnValue} {...rest} />
    </View>
  );
};
