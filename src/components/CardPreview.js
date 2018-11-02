import React from 'react';

class CardPreview extends React.Component {

    /***********************************************************/
    // helper function to add spaces to a card name
    addSpacesToName(name){
        return [...name].map(letter => {
            return (letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91) ? ' ' + letter : letter
        }).join('')
    }

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
                onClick={() => this.handleClick(card.name)}
                onDragStart={(event) => this.props.onDragStart(event, card.name)}
                draggable>
                <h4>{`${this.addSpacesToName(card.name)}`}</h4>
            </div>)
        });

        return(
            <div>{filteredCards}</div>
        );
    }
}

export default CardPreview;