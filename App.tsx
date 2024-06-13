/**
 * Sample Chatbot demo
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from './src/screens/home';
import {store} from './src/store';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
