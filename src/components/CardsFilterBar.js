import React from 'react';

class CardsFilterBar extends React.Component {

    handleFilterClick(event){
        event.preventDefault();

    }

    render(){
        return(
            <div className='filter-bar'>
                <form>
                    <input name="filterByKeyword" type="text" placeholder="find by keyword"></input>
                    <div className="categories-filters">
                        <button onClick={this.handleFilterClick} className="group-one"></button>
                        <button onClick={this.handleFilterClick} className="group-two"></button>
                        <button onClick={this.handleFilterClick} className="group-three"></button>
                    </div>
                </form>

            </div>
        );
    }
}

export default CardsFilterBar;