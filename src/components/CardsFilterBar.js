import React from 'react';

class CardsFilterBar extends React.Component {
    render(){
        return(
            <div className='filter-bar'>
                <form>
                    <input name="filterByKeyword" type="text" placeholder="find by keyword"></input>
                    <div className="categories-filters">
                        <div className="group-one"></div>
                        <div className="group-two"></div>
                        <div className="group-three"></div>
                    </div>
                </form>

            </div>
        );
    }
}

export default CardsFilterBar;