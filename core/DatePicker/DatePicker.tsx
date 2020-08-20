import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {styles} from './Styles/styles';
import {Calendar, DateObject} from 'react-native-calendars';
import {Button} from '../button/Button';

export interface MultipleOptions {
  name: string;
  value(val: string): void;
}

interface ModalView {
  modalVisibility: boolean;
  value(item: string): void;
  switchVisibility(): void;
}

const ModalView = (props: ModalView) => {
  function selectedItem(day: DateObject) {
    props.value(day.dateString);
    props.switchVisibility();
  }
  return (
    <Modal visible={props.modalVisibility} transparent={true}>
      <View style={styles.modalView1}>
        <View style={styles.modalView2}>
          <Calendar onDayPress={selectedItem} />
        </View>
        <View style={{margin: 10, borderRadius: 8}}>
          <Button
            name="Cancel"
            style={{backgroundColor: 'white', borderRadius: 8}}
            onPress={props.switchVisibility}
          />
        </View>
      </View>
    </Modal>
  );
};

const MultipleOptionsModal = (props: MultipleOptions) => {
  const [visibility, setVisibility] = useState(false);
  const [Current, setCurrent] = useState('- - - ');
  function switchVisibility() {
    setVisibility(!visibility);
  }
  props.value(Current);
  return (
    <View style={styles.container}>
      <Text style={styles.textName}>{props.name}</Text>
      <TouchableOpacity onPress={switchVisibility}>
        <View style={styles.valueContainer}>
          <Text style={styles.textValue}>{Current}</Text>
        </View>
      </TouchableOpacity>
      <ModalView
        switchVisibility={switchVisibility}
        value={setCurrent}
        modalVisibility={visibility}
      />
    </View>
  );
};

export default MultipleOptionsModal;
