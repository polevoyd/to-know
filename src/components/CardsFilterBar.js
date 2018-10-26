import React from 'react';

class CardsFilterBar extends React.Component {
    render(){
        return(
            <div className='filter-bar'>
                <input type="text" placeholder="sorting"></input>
            </div>
        );
    }
}

export default CardsFilterBar;