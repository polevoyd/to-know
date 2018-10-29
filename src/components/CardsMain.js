import React from 'react';
import CardsFilterBar from './CardsFilterBar';
import CardsResults from './CardsResults';
import CardPreview from './CardPreview';

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