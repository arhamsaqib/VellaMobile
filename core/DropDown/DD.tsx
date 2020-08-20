import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import {styles} from './Styles/styles';
import {Button} from '../button/Button';

export interface MultipleOptions {
  name: string;
  options: any;
  value(val: string): void;
}

interface ModalView {
  options: any;
  modalVisibility: boolean;
  value(item: string): void;
  switchVisibility(): void;
}

const ModalView = (props: ModalView) => {
  function selectedItem(item: string) {
    props.value(item);
    props.switchVisibility();
  }
  return (
    <Modal visible={props.modalVisibility} transparent={true}>
      <View style={styles.modalView1}>
        <View style={styles.modalView2}>
          <FlatList
            data={props.options[0]}
            keyExtractor={(item) => item.id}
            renderItem={({item, index}) => {
              if (item.status === 'on') {
                return (
                  <TouchableOpacity onPress={() => selectedItem(item.duration)}>
                    <View style={styles.listView}>
                      <Text style={styles.text}>{item.duration}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }
              return null;
            }}
          />
        </View>
        <View style={{marginTop: 10, marginBottom: 2, borderRadius: 8}}>
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
        options={props.options}
        switchVisibility={switchVisibility}
        value={setCurrent}
        modalVisibility={visibility}
      />
    </View>
  );
};

export default MultipleOptionsModal;
