import React from 'react';
import {View, Text} from 'react-native';
import {useSelector, RootStateOrAny} from 'react-redux';

const Header = () => {
  const user = useSelector((state: RootStateOrAny) => state.CurrentUser);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
        Hi {user.email}
      </Text>
    </View>
  );
};

export default Header;
