import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {getTable as get} from '../../requests/fetch';
import {Card} from '../Admin/CalendarSub/AllAppointments';
import {useSelector, RootStateOrAny} from 'react-redux';
import Header from '../../../core/Header/Header';

const All = () => {
  const id = useSelector((state: RootStateOrAny) => state.CurrentUser.id);
  console.log(id, 'current id');

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
      <View
        style={{
          backgroundColor: '#d5bdad',
          height: '8%',
          justifyContent: 'center',
        }}>
        <Header />
      </View>
      <View style={{margin: 10}}>
        <Text style={{fontSize: 27, fontWeight: 'bold'}}>All Appointments</Text>
      </View>
      <FlatList
        data={apt}
        renderItem={({item, index}) => {
          if (item.status !== 'cancel' && item.client_id === id) {
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
