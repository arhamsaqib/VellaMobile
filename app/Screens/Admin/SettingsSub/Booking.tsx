import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import SButton from '../../../../core/SwtichButton/SwitchButton';
import {Button} from '../../../../core/button/Button';
import {getTable as get} from '../../../requests/fetch';
import {changeDays} from '../../../requests/fetch';
import {changeDurations} from '../../../requests/fetch';
import {updateBookings as upd} from '../../../requests/fetch';

const Booking = () => {
  const [weekdays, setWeekdays]: any = useState();
  const [dur, setDurations]: any = useState();
  const [time, setTimings]: any = useState();
  var days = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  };
  var durations = {
    _15mins: false,
    _30mins: false,
    _45mins: false,
    _60mins: false,
  };
  var timings = {
    start: '',
    end: '',
  };
  async function submit() {
    const x = await upd.fetchData('update-booking', days, durations, timings);
    console.log(x, 'return');
  }
  /*useEffect(() => {
    durations();
    days();
    timings();
  }, []);
  async function durations() {
    const d = await get.fetchData('table', 'durations');
    const c = changeDurations(d);
    setDurations(c);
  }
  async function days() {
    const d = await get.fetchData('table', 'weekdays');
    const c = changeDays(d);
    setWeekdays(c);
  }
  async function timings() {
    const d = await get.fetchData('table', 'timings');
    const x = changeTimings(d);
    setTimings(x);
  }*/

  return (
    <View>
      <View style={styles.head}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          Available Time Slots
        </Text>
      </View>
      <View style={styles.ButtonView}>
        <SButton name="15 mins" val={(val) => (durations._15mins = val)} />
        <SButton name="30 mins" val={(val) => (durations._30mins = val)} />
        <SButton name="45 mins" val={(val) => (durations._45mins = val)} />
        <SButton name="60 mins" val={(val) => (durations._60mins = val)} />
      </View>
      <View style={styles.head}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Working Days</Text>
      </View>
      <View style={styles.ButtonView}>
        <SButton name="Monday" val={(val) => (days.monday = val)} />
        <SButton name="Tuesday" val={(val) => (days.tuesday = val)} />
        <SButton name="Wednesday" val={(val) => (days.wednesday = val)} />
        <SButton name="Thursday" val={(val) => (days.thursday = val)} />
      </View>
      <View style={styles.ButtonView}>
        <SButton name="Friday" val={(val) => (days.friday = val)} />
        <SButton name="Saturday" val={(val) => (days.saturday = val)} />
        <SButton name="Sunday" val={(val) => (days.sunday = val)} />
      </View>
      <View style={styles.head}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Start Time</Text>
      </View>
      <TextInput
        style={{
          borderRadius: 8,
          borderWidth: 1,
          backgroundColor: 'white',
          marginHorizontal: 10,
        }}
        onChangeText={(val) => (timings.start = val)}
      />
      <View style={styles.head}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>End Time</Text>
      </View>
      <TextInput
        style={{
          borderRadius: 8,
          borderWidth: 1,
          backgroundColor: 'white',
          marginHorizontal: 10,
        }}
        onChangeText={(val) => (timings.end = val)}
      />
      <View style={{margin: 15}}>
        <Button name="Update" textStyle={{color: 'white'}} onPress={submit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
  },
  head: {
    height: 30,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});

export default Booking;
