import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {dataUsingId as get} from '../../../requests/fetch';
import {TextInput} from 'react-native-gesture-handler';
import {Button} from '../../../../core/button/Button';
import {updateUser as update} from '../../../requests/fetch';

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

const Selected = ({route}: any) => {
  /*const [info, setInfo]: any = useState();
  const [user, setUser]: any = useState();*/
  const id = route.params.id;
  useEffect(() => {
    data();
    getUser();
  }, []);

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [timezone, setTimezone] = useState('');
  const [email, setEmail] = useState('');

  async function data() {
    const d = await get.fetchData('getUser', id, 'user_info');
    if (d !== undefined) {
      setFname(d.firstname);
      setLname(d.lastname);
      setCity(d.city);
      setPhone(d.phone);
      setTimezone(d.timezone);
    }
  }
  async function getUser() {
    const d = await get.fetchData('getUser', id, 'users');
    if (d !== undefined) {
      setEmail(d.email);
    }
  }
  async function updateValues() {
    const check = await update.fetchData(
      'updateUser',
      id,
      email,
      fname,
      lname,
      city,
      phone,
      timezone,
    );
    console.log(check, 'donevalues');
  }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Box name="First Name" value={fname} return={setFname} />
      <Box name="Last Name" value={lname} return={setLname} />
      <Box name="Timezone" value={timezone} return={setTimezone} />
      <Box name="Email" value={email} return={setEmail} />
      <Box name="Phone Number" value={phone} return={setPhone} />
      <Box name="City" value={city} return={setCity} />
      <View style={{margin: 10}}>
        <Button
          name="Update Profile"
          onPress={updateValues}
          textStyle={{color: 'white'}}
        />
      </View>
    </View>
  );
};

export default Selected;

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
});
