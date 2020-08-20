import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface SB {
  name: string;
  val(val: boolean): void;
}

const SwitchButton = (props: SB) => {
  const [state, setState] = useState(false);
  function change() {
    setState(!state);
  }
  //console.log(state);
  props.val(state);
  return (
    <TouchableOpacity
      style={[styles.button, state && {backgroundColor: '#d5bdab'}]}
      onPress={change}>
      <Text>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    height: 30,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
});

export default SwitchButton;
