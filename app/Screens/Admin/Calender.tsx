import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import All from './CalendarSub/AllAppointments';
import Header from '../../../core/Header/Header';
import Selected from './CalendarSub/SelectedAppointment';

const Stack = createStackNavigator();

const Calender = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#d5bdab'},
      }}>
      <Stack.Screen
        name="All"
        component={All}
        options={{headerTitle: () => <Header />, headerLeft: () => null}}
      />
      <Stack.Screen name="Selected" component={Selected} />
    </Stack.Navigator>
  );
};

export default Calender;
