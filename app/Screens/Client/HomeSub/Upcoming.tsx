import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import {getTable as get} from '../../../requests/fetch';
import {Card} from '../../Admin/CalendarSub/AllAppointments';
import {useSelector, RootStateOrAny} from 'react-redux';

const Upcoming = () => {
  const [apt, setApt]: any = useState({});
  const id = useSelector((state: RootStateOrAny) => state.CurrentUser.id);
  useEffect(() => {
    appointments();
  }, []);
  async function appointments() {
    const d = await get.fetchData('table', 'booked_appointments');
    setApt(d);
  }
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  function convert(d: string) {
    var cm = new Date(d);
    return cm;
  }
  function check(d: any) {
    d = convert(d);
    if (
      d.getFullYear() >= year &&
      d.getDate() >= date &&
      d.getMonth() + 1 >= month
    ) {
      // console.log('true', d);
      return true;
    }
    return false;
  }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{margin: 10}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
          Upcoming Appointments
        </Text>
      </View>
      <View>
        <FlatList
          data={apt}
          renderItem={({item, index}) => {
            if (
              item.status !== 'cancel' &&
              check(item.booking_date) &&
              item.client_id === id
            ) {
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
    </View>
  );
};

export default Upcoming;
