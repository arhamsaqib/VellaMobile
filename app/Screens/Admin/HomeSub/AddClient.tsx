import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Button} from '../../../../core/button/Button';
import {new_client as create} from '../../../requests/fetch';
const Box = (props: any) => {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.text}>{props.name}</Text>
      <TextInput
        placeholder={props.name}
        style={styles.box}
        value={props.value}
        onChangeText={props.return}
      />
    </View>
  );
};

const Add = () => {
  const [lname, setLname] = useState('');
  const [pass, setpass] = useState('');
  const [fname, setFname] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [timezone, setTimezone] = useState('');
  const [phone, setPhone] = useState('');

  async function updateValues() {
    const info = {
      fname: fname,
      lname: lname,
      pass: pass,
      city: city,
      phone: phone,
      email: email,
      timezone: timezone,
    };
    console.log(await create.fetchData('new-client', info));
    //console.log(info, 'infoooo');
  }
  function setFields(val: string) {
    setLname(val);
    setpass(val.toLowerCase() + 123);
  }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Box name="First Name" return={setFname} />
      <Box name="Last Name" return={setFields} />
      <Box name="Email" return={setEmail} />
      <View style={styles.boxContainer}>
        <Text style={[styles.text, {marginBottom: 10}]}>Password</Text>
        <Text style={[styles.box]}>{pass}</Text>
      </View>
      <Box name="Timezone" return={setTimezone} />
      <Box name="Phone Number" return={setPhone} />
      <Box name="City" return={setCity} />
      <View style={{margin: 10}}>
        <Button
          name="Add Client"
          onPress={updateValues}
          textStyle={{color: 'white'}}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  boxContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  text: {
    color: 'grey',
    fontSize: 15,
    marginBottom: -8,
  },
  pass: {
    height: 40,
  },
});

export default Add;
