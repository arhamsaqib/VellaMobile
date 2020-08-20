import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Calendar, DateObject} from 'react-native-calendars';
import {all_appointments as get} from '../../../requests/fetch';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface CardInterface {
  name?: string;
  time?: string;
  duration?: string;
  date?: string;
}

export const Card = (props: CardInterface) => {
  const {name, duration, time, date} = props;
  return (
    <View style={styles.appt}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>
          {time} - {duration}
        </Text>
      </View>
      <View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

const Calender = ({navigation}: any) => {
  const [current, setCurrent]: any = useState();
  const [apt, setApt]: any = useState({});
  console.log(current);
  async function appointments(day: DateObject) {
    // console.log(day.dateString);
    const d = await get.fetchData('all-appointments', day.dateString);
    setApt(d);
  }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Calendar onDayPress={appointments} />
      <FlatList
        data={apt}
        renderItem={({item, index}) => {
          if (item.booking_date !== null && item.status !== 'cancel') {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Selected', {data: item})}>
                <Card
                  name={item.client_name}
                  duration={item.duration}
                  time={item.booking_time}
                  date={item.booking_date}
                />
              </TouchableOpacity>
            );
          }
          return null;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  appt: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'space-between',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  time: {
    fontWeight: '600',
  },
  date: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default Calender;
