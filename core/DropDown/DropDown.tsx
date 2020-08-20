import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import {styles} from './Styles/styles';
import {TextInputBox} from '../textinput/TextInput';
import {Button} from '../button/Button';

export interface DropDownProps {
  name: string;
  options: any;
  value(val: string): void;
}

interface ModalView {
  options: any;
  modalVisibility: boolean;
  value: any;
  switchVisibility(): void;
}

const ModalView = (props: ModalView) => {
  function selectedItem(id: string, fname: string, lname: string) {
    props.value({id: id, fname: fname, lname: lname});
    props.switchVisibility();
  }
  const [search, setSearch] = useState('');
  return (
    <Modal visible={props.modalVisibility} transparent={true}>
      <View style={styles.modalView1}>
        <View style={styles.modalView2}>
          <View style={{margin: 10}}>
            <TextInputBox placeholder="Search here" returnValue={setSearch} />
          </View>
          <FlatList
            data={props.options[0]}
            keyExtractor={(item) => item.user_id}
            renderItem={({item, index}) => {
              if (
                item.firstname.toLowerCase().includes(search.toLowerCase()) ||
                item.lastname.toLowerCase().includes(search.toLowerCase())
              ) {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      selectedItem(item.user_id, item.firstname, item.lastname)
                    }>
                    <View style={styles.listView}>
                      <Text style={styles.text}>
                        {item.firstname} {item.lastname}
                      </Text>
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

const DropDown = (props: DropDownProps) => {
  const [visibility, setVisibility] = useState(false);
  const [Current, setCurrent]: any = useState('- - - ');
  function switchVisibility() {
    setVisibility(!visibility);
  }
  props.value(Current);
  //console.log(props.options, 'inmodal');

  return (
    <View style={styles.container}>
      <Text style={styles.textName}>{props.name}</Text>
      <TouchableOpacity onPress={switchVisibility}>
        <View style={styles.valueContainer}>
          <Text style={styles.textValue}>
            {Current.fname} {Current.lname}
          </Text>
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

export default DropDown;
