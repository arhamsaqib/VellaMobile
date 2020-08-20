import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Button} from '../../../../core/button/Button';
import {useSelector, RootStateOrAny, useStore} from 'react-redux';
import update from '../../../redux/actions/currentUserAction';

const ChangePassword = () => {
  const state = useSelector((state: RootStateOrAny) => state.CurrentUser);
  const store = useStore();
  const [match, setMatch] = useState(false);
  const [success, setSuccess] = useState(false);
  var pass = {
    new: '',
    confirm: '',
  };
  console.log(state);

  function change() {
    console.log(pass.new, 'new ', pass.confirm, 'confrim');
    if (pass.new === pass.confirm) {
      if (pass.new !== '') {
        store.dispatch(
          update({
            id: state.id,
            pass: state.pass,
            email: state.email,
            pin: pass.confirm,
            role: state.role,
            set: 'true',
          }),
        );
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
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>New PIN</Text>
      </View>
      <TextInput
        style={{
          borderRadius: 8,
          borderWidth: 1,
          backgroundColor: 'white',
          marginHorizontal: 10,
          textAlign: 'center',
        }}
        secureTextEntry={true}
        onChangeText={(val) => (pass.new = val)}
        maxLength={4}
        keyboardType={'numeric'}
      />
      <View style={styles.head}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Confirm New PIN</Text>
      </View>
      <TextInput
        style={{
          borderRadius: 8,
          borderWidth: 1,
          backgroundColor: 'white',
          marginHorizontal: 10,
          textAlign: 'center',
        }}
        secureTextEntry={true}
        onChangeText={(val) => (pass.confirm = val)}
        maxLength={4}
        keyboardType={'numeric'}
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
