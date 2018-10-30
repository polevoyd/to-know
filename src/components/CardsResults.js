import React from 'react';
import CardForm from './CardForm';

class CardsResults extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showCard: false,
            cards:
            [
                {name: 'first Duplicate',                keywords: ['keywords keywords keywords keywords keywords']},
                {name: 'rotate Matrix',                  keywords: ['keywords keywords keywords keywords keywords']},
                {name: 'first Not Repeating Character',  keywords: ['keywords keywords keywords keywords keywords']}
            ]
        }
    }


    handleClick(name) {

        // creating a link from name
        const link = `https://repl.it/@polevoyd/${name.split(' ').join('')}?lite=true`;
        const embeddedCodeEl = <iframe height="400px" width="100%" src={link} scrolling="no" frameborder="no" allowtransparency="yes" allowfullscreen="yes" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>;
        // console.log(embeddedCodeEl)
        
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
                <div>
                    {this.state.showCard ? <CardForm /> : null}
                </div>
                {renderCards}
                {/* <CardForm /> */}
            </div>
        );
    }
}

export default CardsResults;