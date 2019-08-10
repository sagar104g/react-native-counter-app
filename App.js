/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Counter from './counter';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './rootReducer';
const store = createStore(reducer);
const App = () => {
  return (
    <Provider store ={store}><Counter/></Provider>

  );
};


export default App;
