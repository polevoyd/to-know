import React from 'react';
import CardForm from './CardForm';

class CardsResults extends React.Component {
    constructor(props){
        super(props);
        // setting up initial state
        this.state = {
            showCard: false,
            showCardName: null,
            cards:
            [
                {name: 'first Duplicate',                keywords: ['keywords keywords keywords keywords keywords']},
                {name: 'rotate Matrix',                  keywords: ['keywords keywords keywords keywords keywords']},
                {name: 'first Not Repeating Character',  keywords: ['keywords keywords keywords keywords keywords']}
            ]
        }
        // bind cause it is modifying state
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(name) {

        // change state to show/hide card
        this.setState({
            showCard: !this.state.showCard,
            showCardName: name
        })
    }

    render(){
        const renderCards = this.state.cards.map(card => (
            <div key={card.name} className="card-preview" onClick={() => this.handleClick(card.name)}>
                <h4>{`${card.name}`}</h4>
                <p>{`${card.keywords.map(word => word)} `}</p>
            </div>
        ));

        return(
            <div className="cards-all-results">
                {this.state.showCard ? <CardForm cardToShow={this.state.showCardName}/> : null}
                {renderCards}
            </div>
        );
    }
}

export default CardsResults;