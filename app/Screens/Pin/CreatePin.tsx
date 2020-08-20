import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {Button} from '../../../core/button/Button';
import {useStore, useSelector, RootStateOrAny} from 'react-redux';
import setUser from '../../redux/actions/currentUserAction';

export const CreatePin = ({navigation}: any) => {
  const [pin, setPin] = useState('');
  const state: any = useSelector((state: RootStateOrAny) => state.CurrentUser);
  const store = useStore();
  console.log(pin, state.email);
  function save() {
    store.dispatch(
      setUser({
        id: state.id,
        pass: state.pass,
        email: state.email,
        pin: pin,
        role: state.role,
        set: 'true',
      }),
    );
    if (state.role === 'admin') {
      navigation.navigate('AdminView');
    } else {
      navigation.navigate('ClientView');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.text1}>Create PIN</Text>
        <Text style={styles.text2}>Enter your PIN to use the application</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          maxLength={4}
          onChangeText={setPin}
        />
        <View style={{marginHorizontal: '10%'}}>
          <Button
            name="Create PIN"
            textStyle={{color: 'white'}}
            onPress={save}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    //flex: 1,
  },
  text1: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text2: {
    fontSize: 15,
  },
  container: {backgroundColor: 'white', height: '100%'},
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginHorizontal: '20%',
    fontSize: 50,
    justifyContent: 'center',
    textAlign: 'center',
    marginVertical: 50,
  },
});
