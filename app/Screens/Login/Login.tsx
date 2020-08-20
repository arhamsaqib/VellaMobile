import React, {useState} from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {TextInputBox} from '../../../core/textinput/TextInput';
import {Button} from '../../../core/button/Button';
import {styles} from './styles';
import {auth} from '../../../app/requests/fetch';
import {VerifyPin} from '../Pin/VerifyPin';
//redux
import {useStore, useSelector, RootStateOrAny} from 'react-redux';
import SetUser from '../../../app/redux/actions/currentUserAction';

const LoginDef = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [match, setMatch] = useState(false);
  const [vis, setVis] = useState(true);
  const store = useStore();

  async function fetchData() {
    const ret = await auth.fetchData('auth', email, password);
    if (!ret) {
      //user not matched
      console.log('not matched');
      setMatch(true);
    } else {
      store.dispatch(
        SetUser({
          id: ret.id,
          email: email,
          pass: password,
          role: ret.role,
          set: 'true',
        }),
      );
      //user matched
      setMatch(false);
      //console.log(ret.role);
      if (ret.role === 'admin') {
        navigation.navigate('Create Pin');
        setVis(false);
      } else {
        navigation.navigate('Create Pin');
        setVis(false);
      }
    }
  }

  return (
    <View style={styles.centeredView}>
      <ImageBackground
        source={require('../../assets/login-bg.jpg')}
        style={{height: '100%'}}>
        <Modal animationType="slide" transparent={vis} visible={vis}>
          <View style={styles.centeredView1}>
            <View style={styles.modalView}>
              <View style={styles.name}>
                <Text style={styles.nameText}>VELLA CONSULTING INC.</Text>
              </View>
              <View style={{marginVertical: 10}}>
                <TextInputBox
                  placeholder="Email"
                  returnValue={(text) => setEmail(text)}
                />
                <TextInputBox
                  placeholder="Password"
                  returnValue={(text) => setPassword(text)}
                  secureTextEntry={true}
                />
              </View>
              {match && (
                <Text style={{textAlign: 'center', color: 'red'}}>
                  The credentials do not match our records.
                </Text>
              )}
              <Button
                name="Login"
                style={styles.buttonStyle}
                textStyle={{color: 'white'}}
                onPress={fetchData}
              />
              <View style={styles.forgot}>
                <TouchableOpacity
                  onPress={() => console.log('Forgot Password')}>
                  <Text style={styles.forgotText}>Forgot Your Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
};

const Login = ({navigation}: any) => {
  const state: any = useSelector((state: RootStateOrAny) => state.CurrentUser);
  //console.log(state);

  if (state.set === 'true') {
    var comp = <VerifyPin navigation={navigation} />;
  } else {
    var comp = <LoginDef navigation={navigation} />;
  }
  return <View style={{flex: 1}}>{comp}</View>;
};
export default Login;
