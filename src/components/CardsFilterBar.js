import React from 'react';

class CardsFilterBar extends React.Component {
    render(){
        return(
            <div className='filter-bar'>
                <form>
                    <input name="filterByKeyword" type="text" placeholder="find by keyword"></input>
                    <select name="filterBySelect">
                        <option value="filterSelectDefault">category</option>
                        <option value="filterSelectConcepts">concepts</option>
                        <option value="filterSelectChallenges">challanges</option>
                        <option value="filterSelectDataStructures">data structures</option>
                        <option value="filterSelectAlgorithms">algorithms</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default CardsFilterBar;