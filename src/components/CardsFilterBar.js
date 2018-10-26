import React from 'react';

class CardsFilterBar extends React.Component {
    render(){
        return(
            <div className='filter-bar'>
                <form>
                    <input type="text" placeholder="find by keyword"></input>
                    <div><p>or use</p></div>
                </form>
            </div>
        );
    }
}

export default CardsFilterBar;