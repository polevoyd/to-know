import React from 'react';

class CardsFilterBar extends React.Component {
    render(){
        return(
            <div className='filter-bar'>
                <form>
                    <input name="filterByKeyword" type="text" placeholder="find by keyword"></input>
                    <div><p>or use</p></div>
                    <select name="filterBySelect">
                        <option value="dataStructures">Concepts</option>
                        <option value="dataStructures">Challanges</option>
                        <option value="dataStructures">Data Structures</option>
                        <option value="dataStructures">Algorithms</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default CardsFilterBar;