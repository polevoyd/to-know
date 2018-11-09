import React from 'react';
import CardsResults from './CardsResults';
import SettingsTab from './SettingsTab';

const CardsMain = () => (
    <div>
        <div className="menu-icon"><i class="far fa-caret-square-down"></i></div>
        <SettingsTab />
        <CardsResults />
    </div>
);

export default CardsMain;