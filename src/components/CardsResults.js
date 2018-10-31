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
    
    /***********************************************************/
    // click on each card preview
    handleClick(name) {

        // change state to show/hide card
        this.props.dispatch({
            type: 'SHOW_CARD',
            name
        })
    }

    /***********************************************************/
    // click on a panel buttons
    handlePanelClicks(event) {
 
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

    /***********************************************************/
    // helper function to add spaces to a card name
    addSpacesToName(name){
        return [...name].map(letter => {
            return (letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91) ? ' ' + letter : letter
        }).join('')
    }
    /***********************************************************/
    // rendering
    render(){
        
        const renderCards = this.props.cards.cards.map(card => (
            <div key={card.name} className="card-preview" onClick={() => this.handleClick(card.name)}>
                <div className="close"></div>
                <h4>{`${this.addSpacesToName(card.name)}`}</h4>
                <div className="category-buttons">
                    <div className="red"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                </div>
            </div>
        ));

        return(
            <div className="cards-all-results">
                {this.props.cards.showCard ? <CardForm cardToShow={this.addSpacesToName(this.props.cards.showCardName)} user={this.props.cards.user} handlePanelClicks={this.handlePanelClicks}/> : null}
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