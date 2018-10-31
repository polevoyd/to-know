import React from 'react';


import { connect } from 'react-redux';

import CardsFilterBar from './CardsFilterBar';
import CardsResults from './CardsResults';
import AddCards from './AddCards';

class CardsMain extends React.Component {    
    render(){

        return(
            <div>
                <CardsFilterBar />
                <AddCards/>
                <CardsResults />
            </div>
        );
    }
}

export default connect()(CardsMain);