import React from 'react';

class CardPreview extends React.Component {



    render() {

        const cards = this.props.cards;
        const categoryToFilter = this.props.category;
        console.log(categoryToFilter);

        const filteredCards = cards.cardsObjects
        .filter(cardObj => {
            return cardObj.category === categoryToFilter;
        })
        .map(card => {
            return(<div key={categoryToFilter + card.name} 
                className="card-preview" 
                onClick={() => this.props.handleClick(card.name)}
                onDragStart={(event) => this.props.onDragStart(event, card.name)}
                draggable>
                <h4>{`${this.props.addSpacesToName(card.name)}`}</h4>
            </div>)
        });

        return(
            <div>{filteredCards}</div>
        );
    }
}

export default CardPreview;