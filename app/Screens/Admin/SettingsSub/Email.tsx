import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {Button} from '../../../../core/button/Button';

const Email = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.main}>
        <Text style={{fontSize: 15}}>Client on Booking Appointment</Text>
        <Switch />
      </View>
      <View style={styles.main}>
        <Text style={{fontSize: 15}}>Client on Appointment Cancellation</Text>
        <Switch />
      </View>
      <View style={styles.main}>
        <Text style={{fontSize: 15}}>2 Hours Before Reminder to Client</Text>
        <Switch />
      </View>
      <View style={styles.main}>
        <Text style={{fontSize: 15}}>Owner on Booking Appointment</Text>
        <Switch />
      </View>
      <View style={styles.main}>
        <Text style={{fontSize: 15}}>Owner on Appointment Cancellation</Text>
        <Switch />
      </View>
      <View style={styles.main}>
        <Text style={{fontSize: 15}}>2 Hours Before Reminder to Client</Text>
        <Switch />
      </View>
      <View style={{margin: 20}}>
        <Button name="Update" textStyle={{color: 'white'}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
});
export default Email;
