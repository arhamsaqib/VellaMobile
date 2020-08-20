import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useStore, RootStateOrAny} from 'react-redux';
import action from '../../redux/actions/currentUserAction';
export const VerifyPin = ({navigation}: any) => {
  const store = useStore();
  const state: any = useSelector((state: RootStateOrAny) => state.CurrentUser);
  const [pin, setPin] = useState('');
  if (pin === state.pin) {
    if (state.role === 'admin') {
      console.log('admin');
      navigation.navigate('AdminView');
    } else {
      console.log('client');
      navigation.navigate('ClientView');
    }
  }
  function forgot() {
    store.dispatch(action(''));
    navigation.popToTop();
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.text1}>Verify PIN</Text>
        <Text style={styles.text2}>Enter your PIN to use the application</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          maxLength={4}
          onChangeText={setPin}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.forgot}>
        <TouchableOpacity onPress={forgot}>
          <Text style={styles.text3}>Forgot your PIN?</Text>
        </TouchableOpacity>
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
  text3: {
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
  forgot: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
