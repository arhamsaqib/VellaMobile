import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Button} from '../../../../core/button/Button';
import {getTable as get} from '../../../requests/fetch';
import {Card} from '../CalendarSub/AllAppointments';

const Main = ({navigation}: any) => {
  const [apt, setApt]: any = useState({});
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
    // console.log(d.getDate(), 'dd');
    if (
      d.getFullYear() >= year &&
      d.getDate() >= date &&
      d.getMonth() + 1 >= month
    ) {
      return true;
    }
    return false;
  }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{margin: 10}}>
        <Text style={{fontSize: 27, fontWeight: 'bold'}}>Upcoming</Text>
      </View>
      <View style={{maxHeight: '70%'}}>
        <FlatList
          data={apt}
          renderItem={({item, index}) => {
            if (
              item.booking_date !== null &&
              item.status !== 'cancel' &&
              check(item.booking_date)
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
      <View style={{position: 'absolute', bottom: 0, marginVertical: 5}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: '49%', marginRight: '1%'}}>
            <Button
              name="Add Appointment"
              style={{backgroundColor: 'transparent', borderColor: 'grey'}}
              onPress={() => navigation.navigate('New Appointment')}
            />
          </View>
          <View style={{width: '49%'}}>
            <Button
              name="Add Client"
              style={{backgroundColor: 'transparent', borderColor: 'grey'}}
              onPress={() => navigation.navigate('New Client')}
            />
          </View>
        </View>
        <View style={{margin: '1%'}}>
          <Button
            name="All Appointments"
            textStyle={{color: 'white'}}
            onPress={() => navigation.navigate('Appointments')}
          />
        </View>
      </View>
    </View>
  );
};

export default Main;
