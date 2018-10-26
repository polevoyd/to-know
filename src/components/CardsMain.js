import React from 'react';
import CardsFilterBar from './CardsFilterBar';
import CardsResults from './CardsResults';

class CardsMain extends React.Component {
    render(){
        return(
            <div>
                <CardsFilterBar />
                <CardsResults />
            </div>
        );
    }
}

export default CardsMain;