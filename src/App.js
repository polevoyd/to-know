import React from 'react';
import CardsMain from './components/CardsMain';

// import
// createStore - to initialise store
// provider - to provide store for all children in tree
// cardReducer - reducer function
import {  createStore   } from 'redux';
import {  Provider      } from 'react-redux';
import    cardReducer   from './reducers/cardReducer';

// initialising a store with reducer function
const store = createStore(cardReducer);

class App extends React.Component {

  render(){
    return(
      <div className="app">
      <Provider store={store}>
        <CardsMain />
      </Provider>
      </div>
    );
  }
}

export default App;