import React from 'react';
import CardPreview from './CardPreview';

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
        const postItems = this.state.cards.map(card => {
            
        })
        return(
            <div>
                <h3>Cards Results</h3>
                <div className="cards-results">
                    {/* here will be a logic for a loop of cards within selection on keyword */}
                    <CardPreview />
                </div>
            </div>
 
        );
    }
}

export default CardsResults;