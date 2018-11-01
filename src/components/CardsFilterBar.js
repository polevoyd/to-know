import React from 'react';
import {connect} from 'react-redux';

class CardsFilterBar extends React.Component {
    constructor(props){
        super(props);
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    handleFilterClick(event){
        event.preventDefault();

        const groupName = event.target.classList[0];
        
        // make that button disable and all other buttons enabled
        // event.target.style.disabled = "true";
        event.target.style.disabled = true;


        this.props.dispatch({
            type: 'SET_FILTER',
            groupName
        })
    }

    render(){
        return(
            <div className='filter-bar'>
                <form>
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

export default connect()(CardsFilterBar);