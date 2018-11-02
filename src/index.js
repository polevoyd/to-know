import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardsMain from './components/CardsMain';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import cardReducer from './reducers/cardReducer';
import {ADD_CARDS} from './actions/actions';


const store = createStore(cardReducer); 

ReactDOM.render(
    <Provider store={store}>
        <CardsMain />
    </Provider>,
    document.getElementById('root'));
