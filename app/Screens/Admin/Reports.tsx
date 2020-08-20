import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {TextInputBox} from '../../../core/textinput/TextInput';
import {getData as get} from '../../requests/fetch';
import Header from '../../../core/Header/Header';
const Name = (props: any) => {
  const id = props.obj.user_id;
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('Selected');
      }}>
      <View style={styles.name}>
        <Text style={styles.text}>
          {props.obj.lastname} , {props.obj.firstname}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Reports = ({navigation}: any) => {
  useEffect(() => {
    data1();
  }, []);
  const [clients, setClients] = useState();
  const [search, setSearch] = useState('');
  const [refresh, setRefresh] = useState(false);
  async function data1() {
    const d = await get.fetchData('users_info');
    setClients(d);
  }
  //console.log(search);
  const wait = (timeout: any) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
  const onRefresh = useCallback(() => {
    setRefresh(true);

    wait(5000).then(() => setRefresh(false));
  }, []);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          backgroundColor: '#d5bdad',
          height: '8%',
          justifyContent: 'center',
        }}>
        <Header />
      </View>
      <View style={{margin: 15}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Reports</Text>
      </View>
      <View style={{margin: 10}}>
        <TextInputBox
          placeholder="Search here"
          returnValue={(text) => setSearch(text)}
        />
      </View>
      <View>
        <FlatList
          data={clients}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
          renderItem={({item, index}) => {
            if (
              (item.firstname.toLowerCase().includes(search.toLowerCase()) &&
                search !== '') ||
              (item.lastname.toLowerCase().includes(search.toLowerCase()) &&
                search !== '')
            ) {
              return <Name obj={item} navigation={navigation} />;
            }
            return null;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    marginHorizontal: 10,
    marginVertical: 4,
    height: 40,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    borderBottomColor: 'grey',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Reports;
