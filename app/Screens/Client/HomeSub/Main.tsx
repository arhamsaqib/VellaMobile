import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../../../../core/button/Button';

const Home = ({navigation}: any) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{margin: 10}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>
            VELLA CONSULTING INC.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
          }}>
          <View style={{width: '49%', marginRight: '1%'}}>
            <Button
              name="Book Now"
              style={{borderColor: 'grey'}}
              onPress={() => navigation.navigate('Book')}
              textStyle={{color: 'white'}}
            />
          </View>
          <View style={{width: '49%'}}>
            <Button
              name="See Upcoming"
              style={{backgroundColor: 'transparent', borderColor: 'grey'}}
              onPress={() => navigation.navigate('Upcoming')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
