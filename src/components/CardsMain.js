import React from 'react';
import CardsResults from './CardsResults';
import SettingsTab from './SettingsTab';

class CardsMain extends React.Component {

    render(){
        return(
            <div>
                <div className="menu-icon"><i className="far fa-caret-square-down"></i></div>
                <SettingsTab />
                <CardsResults />
            </div>
        );
    }
}

export default CardsMain;