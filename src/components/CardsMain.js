import React from 'react';
import CardsFilterBar from './CardsFilterBar';
import CardsResults from './CardsResults';
import AddCards from './AddCards';

const CardsMain = () => (
    <div>
        <CardsFilterBar />
        <AddCards />
        <CardsResults />
    </div>
);

export default CardsMain;