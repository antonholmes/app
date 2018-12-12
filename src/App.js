import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCVUEMsM84dpVAfdJsMmrNka-v4NX6doF0',
      authDomain: 'asset-a6897.firebaseapp.com',
      databaseURL: 'https://asset-a6897.firebaseio.com',
      projectId: 'asset-a6897',
      storageBucket: 'asset-a6897.appspot.com',
      messagingSenderId: '1055026793565',
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
