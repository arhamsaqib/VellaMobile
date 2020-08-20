import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './HomeSub/Main';
import All from './HomeSub/AllAppointments';
import Add from './HomeSub/AddClient';
import AddApt from './HomeSub/AddAppointment';
import Header from '../../../core/Header/Header';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#d5bdab'},
      }}>
      <Stack.Screen
        name="Main"
        component={Main}
        /*options={{
          headerShown: false,
        }}*/
        options={{headerTitle: () => <Header />, headerLeft: () => null}}
      />
      <Stack.Screen name="Appointments" component={All} />
      <Stack.Screen name="New Client" component={Add} />
      <Stack.Screen name="New Appointment" component={AddApt} />
    </Stack.Navigator>
  );
};

export default Home;
