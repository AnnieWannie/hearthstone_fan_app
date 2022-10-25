import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import HsApp from './components/HsApp';
import store from './redux/store/index';

const App = () => {
  return (
    <Provider store= {store}>
      <HsApp/>
    </Provider>
  );
}

export default App