import React from 'react';
import CardForm from './CardForm';
import {connect} from 'react-redux';

class CardsResults extends React.Component {
    constructor(props){
        super(props);

        // bind cause it is modifying state
        this.handleClick = this.handleClick.bind(this);
        this.handlePanelClicks = this.handlePanelClicks.bind(this);
    }
    
    // click on each card preview
    handleClick(name) {

        // change state to show/hide card
        this.props.dispatch({
            type: 'SHOW_CARD',
            name
        })
    }

    // click on a panel buttons
    handlePanelClicks(event) {
 
        console.log(event.target.className)
        const operation = event.target.className.split(' ')[2];
        switch (operation) {
            case 'close':
                return this.props.dispatch({
                    type: 'SHOW_CARD'
                })
            
            default:
                break;
        }
    }

    render(){
        
        const renderCards = this.props.cards.cards.map(card => (
            <div key={card.name} className="card-preview" onClick={() => this.handleClick(card.name)}>
                <h4>{`${card.name}`}</h4>
                <p>{`${card.tags.map(word => word)} `}</p>
            </div>
        ));

        return(
            <div className="cards-all-results">
                {this.props.cards.showCard ? <CardForm cardToShow={this.props.cards.showCardName} handlePanelClicks={this.handlePanelClicks}/> : null}
                {renderCards}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state
    }
}

export default connect(mapStateToProps)(CardsResults);