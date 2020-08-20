import React from 'react';
import Vella from './Vella';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import {reducers} from './app/redux/reducers';
import {YellowBox} from 'react-native';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

const App = () => {
  YellowBox.ignoreWarnings(['Warning: Cannot update a component from inside']);
  YellowBox.ignoreWarnings(['Warning: Failed child']);
  YellowBox.ignoreWarnings(['YellowBox']);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Vella />
      </PersistGate>
    </Provider>
  );
};

export default App;
