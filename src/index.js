import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import CardsMain from './components/CardsMain';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import cardReducer from './reducers/cardReducer';


const store = createStore(cardReducer); 

ReactDOM.render(
    <Provider store={store}>
        <CardsMain />
    </Provider>,
    document.getElementById('root'));
