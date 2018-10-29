import React from 'react';
import CardsMain from './components/CardsMain';

class App extends React.Component {

  render(){

    /// here do a call for a api?
    // fetch('https://jsonplaceholder.typicode.com/todos/')
    // .then(response => response.json())
    // .then(json => console.log(json))




    return(
      <div className="app">
        <CardsMain />
      </div>
    );
  }
}

export default App;