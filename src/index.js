import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import makeStore from './store'


const store = makeStore()


ReactDOM.render(
  <Provider store={store}>   
    <App />
    </Provider>, 

  document.getElementById('root'));


registerServiceWorker();
