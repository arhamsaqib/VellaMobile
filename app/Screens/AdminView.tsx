import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Admin/Home';
import Calender from './Admin/Calender';
import Clients from './Admin/Clients';
import Reports from './Admin/Reports';
import Settings from './Admin/Settings';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomNav = createBottomTabNavigator();

const AdminView = () => {
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
        name="Calender"
        component={Calender}
        options={{
          tabBarIcon: ({}) => <Icon name="today" color={'white'} size={25} />,
        }}
      />
      <BottomNav.Screen
        name="Clients"
        component={Clients}
        options={{
          tabBarIcon: ({}) => <Icon name="face" color={'white'} size={25} />,
        }}
      />
      <BottomNav.Screen
        name="Reports"
        component={Reports}
        options={{
          tabBarIcon: ({}) => (
            <Icon name="assignment" color={'white'} size={25} />
          ),
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

export default AdminView;
