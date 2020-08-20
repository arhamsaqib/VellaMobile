import React from 'react';
import Login from './app/Screens/Login/Login';
import {CreatePin} from './app/Screens/Pin/CreatePin';
import {VerifyPin} from './app/Screens/Pin/VerifyPin';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AdminView from './app/Screens/AdminView';
import ClientView from './app/Screens/ClientView';
//import fetch from './app/requests/fetch';

const Stack = createStackNavigator();

const Vella = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Create Pin"
          component={CreatePin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Verify Pin"
          component={VerifyPin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AdminView"
          component={AdminView}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ClientView"
          component={ClientView}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Vella;
