import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DD from '../../../../core/DropDown/DD';
import {getTable as table} from '../../../requests/fetch';
import {dataUsingId as user} from '../../../requests/fetch';
import {Button} from '../../../../core/button/Button';
import {bookAppointment as book} from '../../../requests/fetch';
import {useSelector, RootStateOrAny} from 'react-redux';
import {Calendar, DateObject} from 'react-native-calendars';

const Book = () => {
  const id = useSelector((state: RootStateOrAny) => state.CurrentUser.id);
  const [durations, setDuration]: any = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  var duration = '';
  var currentDate = new Date();

  async function getDurations() {
    const c = await table.fetchData('table', 'durations');
    console.log(c, 'Durations');
    setDuration(c);
  }
  async function update() {
    const d = await user.fetchData('getUser', id, 'user_info');
    // console.log(d.firstname, 'user');
    var client = {
      id: d.user_id,
      fname: d.firstname,
      lname: d.lastname,
    };

    console.log(client, duration, time, date);
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
      <View>
        <Calendar
          onDayPress={(val: DateObject) => setDate(val.dateString)}
          minDate={currentDate}
        />
      </View>
      <TouchableOpacity onPress={getDurations}>
        <DD
          name="Select Duration"
          options={[durations]}
          value={(val) => (duration = val)}
        />
      </TouchableOpacity>
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
      <View style={{margin: 5}}>
        <Button name="Book" textStyle={{color: 'white'}} onPress={update} />
      </View>
    </View>
  );
};

export default Book;
