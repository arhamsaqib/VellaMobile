import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './HomeSub/Main';
import Book from './HomeSub/BookAppointment';
import Upcoming from './HomeSub/Upcoming';
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
        options={{headerTitle: () => <Header />, headerLeft: () => null}}
      />
      <Stack.Screen name="Book" component={Book} />
      <Stack.Screen name="Upcoming" component={Upcoming} />
    </Stack.Navigator>
  );
};

export default Home;
