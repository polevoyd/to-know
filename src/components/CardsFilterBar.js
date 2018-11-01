import React from 'react';

class CardsFilterBar extends React.Component {
    render(){
        return(
            <div className='filter-bar'>
                <form>
                    <input name="filterByKeyword" type="text" placeholder="find by keyword"></input>
                    <div className="categories-filters">
                        <button className="group-one"></button>
                        <button className="group-two"></button>
                        <button className="group-three"></button>
                    </div>
                </form>

            </div>
        );
    }
}

export default CardsFilterBar;