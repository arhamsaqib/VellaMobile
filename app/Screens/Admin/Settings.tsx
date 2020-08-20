import React from 'react';
import Bookings from './SettingsSub/Booking';
import Email from './SettingsSub/Email';
import Update from './SettingsSub/UpdateProfile';
import Pin from './SettingsSub/ChangePin';
import Password from './SettingsSub/ChangePassword';
import All from './SettingsSub/AllSettings';
import Header from '../../../core/Header/Header';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Settings = () => {
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
      <Stack.Screen name="Booking Settings" component={Bookings} />
      <Stack.Screen name="Email Preferences" component={Email} />
      <Stack.Screen name="Update Profile" component={Update} />
      <Stack.Screen name="Change PIN" component={Pin} />
      <Stack.Screen name="Change Password" component={Password} />
    </Stack.Navigator>
  );
};

export default Settings;
