import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Client/Home';
import Calender from './Client/Calendar';
import Settings from './Client/Settings';
import Appointments from './Client/Appointments';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomNav = createBottomTabNavigator();

const ClientView = () => {
  return (
    <BottomNav.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        labelStyle: {
          fontSize: 14,
        },
        tabStyle: {backgroundColor: '#d5bdad', justifyContent: 'center'},
      }}>
      <BottomNav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({}) => <Icon name="home" color={'white'} size={25} />,
        }}
      />
      <BottomNav.Screen
        name="Appointments"
        component={Appointments}
        options={{
          tabBarIcon: ({}) => <Icon name="book" color={'white'} size={25} />,
        }}
      />
      <BottomNav.Screen
        name="Calender"
        component={Calender}
        options={{
          tabBarIcon: ({}) => <Icon name="today" color={'white'} size={25} />,
        }}
      />
      <BottomNav.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({}) => <Icon name="build" color={'white'} size={25} />,
        }}
      />
    </BottomNav.Navigator>
  );
};

export default ClientView;
