import React from 'react';

class CardsFilterBar extends React.Component {
    render(){
        return(
            <div className='filter-bar'>
                <form>
                    <input name="filterByKeyword" type="text" placeholder="find by keyword"></input>
                    <div className="filter-or"><p>or use</p></div>
                    <select name="filterBySelect">
                        <option value="filterSelectDefault">filter</option>
                        <option value="filterSelectConcepts">Concepts</option>
                        <option value="filterSelectChallenges">Challanges</option>
                        <option value="filterSelectDataStructures">Data Structures</option>
                        <option value="filterSelectAlgorithms">Algorithms</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default CardsFilterBar;