import React from 'react';

class CardPreview extends React.Component {

    /***********************************************************/
    // Return a class name depending on category

    pickClass(category) {

        switch (category) {
            case 'new':
                return 'card-preview card-preview-new'

            case 'active':
                return 'card-preview card-preview-active'

            case 'complete':
                return 'card-preview card-preview-complete'
            
            default:
                return 'card-preview card-preview-new';
        }
    }

    /***********************************************************/
    
    render() {

        // filter cards by specific category
        const cards = this.props.cards;
        const categoryToFilter = this.props.category;

        const filteredCards = cards.cardsObjects
        .filter(cardObj => cardObj.category === categoryToFilter)
        .map(card => {
            return(<div key={categoryToFilter + card.name} 
                className={this.pickClass(this.props.category)} 
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