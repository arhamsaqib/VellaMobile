import React from 'react';
import Update from '.././Admin/SettingsSub/UpdateProfile';
import Pin from '.././Admin/SettingsSub/ChangePin';
import Password from '.././Admin/SettingsSub/ChangePassword';
import All from './SettingsSub/AllSettings';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../../../core/Header/Header';

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
      <Stack.Screen name="Update Profile" component={Update} />
      <Stack.Screen name="Change PIN" component={Pin} />
      <Stack.Screen name="Change Password" component={Password} />
    </Stack.Navigator>
  );
};

export default Settings;
