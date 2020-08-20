import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Button} from '../../../../core/button/Button';
import {useSelector, RootStateOrAny} from 'react-redux';
import {changePassword as changeP} from '../../../requests/fetch';

const ChangePassword = () => {
  const state = useSelector((state: RootStateOrAny) => state.CurrentUser);
  const [match, setMatch] = useState(false);
  const [success, setSuccess] = useState(false);
  var pass = {
    new: '',
    confirm: '',
  };
  console.log(state);

  async function change() {
    console.log(pass.new, 'new ', pass.confirm, 'confrim');
    if (pass.new === pass.confirm) {
      if (pass.new !== '') {
        await changeP.fetchData('change-password', state.id, pass.confirm);
        setSuccess(true);
      }
      console.log('same hen');
    } else {
      setMatch(true);
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.head}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>New Password</Text>
      </View>
      <TextInput
        style={{
          borderRadius: 8,
          borderWidth: 1,
          backgroundColor: 'white',
          marginHorizontal: 10,
        }}
        secureTextEntry={true}
        onChangeText={(val) => (pass.new = val)}
      />
      <View style={styles.head}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          Confirm New Password
        </Text>
      </View>
      <TextInput
        style={{
          borderRadius: 8,
          borderWidth: 1,
          backgroundColor: 'white',
          marginHorizontal: 10,
        }}
        secureTextEntry={true}
        onChangeText={(val) => (pass.confirm = val)}
      />
      {match && (
        <View
          style={{margin: 15, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'red'}}>Passwords do not match !</Text>
        </View>
      )}
      {success && (
        <View
          style={{margin: 15, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'green'}}>Successfully Changed !</Text>
        </View>
      )}
      <View style={{margin: 15}}>
        <Button name="Update" textStyle={{color: 'white'}} onPress={change} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    height: 30,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});
export default ChangePassword;
