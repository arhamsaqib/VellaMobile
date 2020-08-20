import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import DropDown from '../../../../core/DropDown/DropDown';
import DatePicker from '../../../../core/DatePicker/DatePicker';
import DD from '../../../../core/DropDown/DD';
import {getData as get} from '../../../requests/fetch';
import {getTable as table} from '../../../requests/fetch';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from '../../../../core/button/Button';
import {bookAppointment as book} from '../../../requests/fetch';

const Add = () => {
  const [clients, setClients]: any = useState([]);
  const [durations, setDuration]: any = useState([]);
  const [duration, setDurationS]: any = useState([]);
  const [time, setTime]: any = useState([]);
  var date = '';
  var client: any = {};
  async function getClients() {
    const c = await get.fetchData('usernames');
    console.log(c, 'all_clients');
    setClients(c);
  }
  async function getDurations() {
    const c = await table.fetchData('table', 'durations');
    console.log(c, 'Durations');
    setDuration(c);
  }
  async function update() {
    //console.log(client, duration, time, date);
    const c = await book.fetchData(
      'book-appointment',
      client,
      duration,
      time,
      date,
    );
    console.log(c, 'msg');
  }
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{margin: 10}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Book Appointment</Text>
      </View>
      <TouchableOpacity onPress={getClients}>
        <DropDown
          name="Select Client"
          options={[clients]}
          value={(val) => (client = val)}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={getDurations}>
        <DD name="Select Duration" options={[durations]} value={setDurationS} />
      </TouchableOpacity>
      <DatePicker name="Select Booking Date" value={(val) => (date = val)} />
      <View style={{margin: 10}}>
        <TextInput
          style={{
            borderRadius: 8,
            borderWidth: 1,
            backgroundColor: 'white',
            marginHorizontal: 10,
          }}
          onChangeText={setTime}
          placeholder="Time"
        />
      </View>
      <View style={{margin: 15}}>
        <Button name="Book" textStyle={{color: 'white'}} onPress={update} />
      </View>
    </View>
  );
};

export default Add;
