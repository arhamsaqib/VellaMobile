import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AllClients from './ClientSub/AllClients';
import Selected from './ClientSub/SelectedClient';
import Header from '../../../core/Header/Header';

const Stack = createStackNavigator();

const Clients = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#d5bdab'},
      }}>
      <Stack.Screen
        name="AllClients"
        component={AllClients}
        options={{headerTitle: () => <Header />, headerLeft: () => null}}
      />
      <Stack.Screen name="Selected" component={Selected} />
    </Stack.Navigator>
  );
};

export default Clients;
