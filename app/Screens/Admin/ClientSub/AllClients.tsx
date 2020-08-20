import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, FlatList, RefreshControl} from 'react-native';
import {TextInputBox} from '../../../../core/textinput/TextInput';
import {getData as get} from '../../../requests/fetch';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/EvilIcons';
const Name = (props: any) => {
  const id = props.obj.user_id;
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Selected', {id})}>
      <View style={styles.name}>
        <Icon name="user" color={'black'} size={25} />
        <Text style={styles.text}>
          {props.obj.lastname} , {props.obj.firstname}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const AllClients = ({navigation}: any) => {
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
      <View style={{margin: 15}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Clients</Text>
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
              item.firstname.toLowerCase().includes(search.toLowerCase()) ||
              item.lastname.toLowerCase().includes(search.toLowerCase())
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: 'grey',
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default AllClients;
