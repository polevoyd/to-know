import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux';
import cardReducer from './reducers/cardReducer';
import Provider from 'react-redux';

const store = createStore(cardReducer);

ReactDOM.render(<App />, document.getElementById('root'));
