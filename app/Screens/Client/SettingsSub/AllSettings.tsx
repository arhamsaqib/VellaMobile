import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useStore} from 'react-redux';
import action from '../../../redux/actions/currentUserAction';

const All = ({navigation}: any) => {
  const store = useStore();
  function logout() {
    store.dispatch(action(''));
    navigation.popToTop();
  }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{margin: 10}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Settings</Text>
      </View>
      <View style={{margin: 10}}>
        <TouchableOpacity onPress={() => navigation.navigate('Update Profile')}>
          <View style={styles.pView}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>
              Update Profile
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Change PIN')}>
          <View style={styles.pView}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>Change PIN</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Change Password')}>
          <View style={styles.pView}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>
              Change Password
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={logout}>
        <View style={[styles.pView, {margin: 10}]}>
          <Text style={{fontWeight: 'bold', fontSize: 14, color: 'red'}}>
            Logout
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{margin: 10, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'grey', fontWeight: 'bold'}}>
          ©2020 Vella Consulting Inc. Proudly powered by UCP
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pView: {
    height: 35,
    marginBottom: 8,
    borderBottomWidth: 0.2,
    justifyContent: 'center',
  },
});
export default All;
