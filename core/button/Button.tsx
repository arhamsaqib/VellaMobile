import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  TextStyle,
  StyleProp,
} from 'react-native';
import {styles} from './styles';
interface ButtonProps extends TouchableOpacityProps {
  name?: string;
  textStyle?: StyleProp<TextStyle>;
  color?: string;
}

export const Button = (props: ButtonProps) => {
  const {name, textStyle, color, ...rest} = props;
  return (
    <TouchableOpacity {...rest}>
      <View style={[styles.main, props.style]}>
        <Text style={[styles.text, textStyle]}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};
