import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Button} from '../../../../core/button/Button';
import {updateAppointment as update} from '../../../requests/fetch';
import {cancelAppointment as cancelApt} from '../../../requests/fetch';

interface CardProps {
  name: string;
  value: string;
  change(val: string): void;
}

const Card = (props: CardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{props.name}:</Text>
      <TextInput
        placeholder={props.name}
        value={props.value}
        onChangeText={props.change}
        style={{fontWeight: 'bold'}}
      />
    </View>
  );
};

const Selected = ({route}: any) => {
  const data = route.params.data;
  const [name, setName] = useState(data.client_name);
  const [date, setDate] = useState(data.booking_date);
  const [time, setTime] = useState(data.bookine_time);
  const [duration, setDuration] = useState(data.duration);
  const [status, setStatus] = useState(data.status);

  async function updateApt() {
    console.log(
      await update.fetchData(
        'update-appointment',
        data.id,
        name,
        date,
        time,
        duration,
      ),
      'status',
    );
  }
  async function cancel() {
    console.log(await cancelApt.fetchData('cancel-appointment', data.id));
  }
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{margin: 10}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
          Appointment Details
        </Text>
      </View>
      <Card name="Name" value={name} change={(text) => setName(text)} />
      <Card name="Date" value={date} change={(text) => setDate(text)} />
      <Card name="Time" value={time} change={(text) => setTime(text)} />
      <Card
        name="Duration"
        value={duration}
        change={(text) => setDuration(text)}
      />
      <View style={[styles.card, {height: 50}]}>
        <Text style={styles.text}>Status:</Text>
        <Text style={{fontWeight: 'bold'}}>{status}</Text>
      </View>
      <View style={{margin: 10}}>
        <Button
          name="Save Changes"
          textStyle={{color: 'white'}}
          onPress={updateApt}
        />
      </View>
      <View style={{margin: 10}}>
        <Button
          name="Cancel"
          textStyle={{color: 'white'}}
          style={{backgroundColor: '#d34844', borderRadius: 8}}
          onPress={cancel}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
  text: {
    fontSize: 15,
    color: 'grey',
  },
});
export default Selected;
