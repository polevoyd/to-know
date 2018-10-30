import React from 'react';
import CardForm from './CardForm';

const Gist = require('react-gist');

class CardsResults extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cards: []
        }
    }

    componentDidMount(){
        // calling api and get data
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(cards => this.setState({cards: cards}));
    }

    render(){
        const renderCards = this.state.cards.map(card => (
            <div key={card.id} className="card-preview">
                <h4>{`card#${card.id}`}</h4>
                <p>{`keywords ${card.title}`}</p>
            </div>
        ));

        return(
            <div className="cards-all-results">
                <h3>Cards Results</h3>
                {renderCards}
                {/* <CardForm /> */}
            </div>
        );
    }
}

export default CardsResults;