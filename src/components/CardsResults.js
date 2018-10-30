import React from 'react';
import CardForm from './CardForm';

const Gist = require('react-gist');

class CardsResults extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cards:
            [
                {name: 'firstDuplicate',                keywords: ['keywords','keywords','keywords']},
                {name: 'rotateMatrix',                  keywords: ['keywords','keywords','keywords']},
                {name: 'firstNotRepeatingCharacter',    keywords: ['keywords','keywords','keywords']}
            ]
        }
    }

    componentDidMount(){
        // // calling api and get data
        // fetch('https://jsonplaceholder.typicode.com/todos/')
        // .then(response => response.json())
        // .then(cards => this.setState({cards: cards}));
    }

    render(){
        const renderCards = this.state.cards.map(card => (
            <div key={card.name} className="card-preview">
                <h4>{`${card.name}`}</h4>
                <p>{`${card.keywords.map(word => word)} `}</p>
            </div>
        ));

        return(
            <div className="cards-all-results">
                {renderCards}
                {/* <CardForm /> */}
            </div>
        );
    }
}

export default CardsResults;