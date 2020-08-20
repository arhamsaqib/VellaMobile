import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {getTable as get} from '../../../requests/fetch';
import {Card} from '../CalendarSub/AllAppointments';

const All = () => {
  const [apt, setApt]: any = useState({});
  useEffect(() => {
    appointments();
  }, []);
  async function appointments() {
    const d = await get.fetchData('table', 'booked_appointments');
    setApt(d);
  }
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{margin: 10}}>
        <Text style={{fontSize: 27, fontWeight: 'bold'}}>All Appointments</Text>
      </View>
      <FlatList
        data={apt}
        renderItem={({item, index}) => {
          if (item.booking_date !== null && item.status !== 'cancel') {
            return (
              <Card
                name={item.client_name}
                duration={item.duration}
                time={item.booking_time}
                date={item.booking_date}
              />
            );
          }
          return null;
        }}
      />
    </View>
  );
};

export default All;
