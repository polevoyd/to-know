import React from 'react';

class CardPreview extends React.Component {

    render() {

        const arr = this.props.cards
        const filterCards = this.props.cards.new.map(card => {
            return(<div key={'new' + card.name} 
                className="card-preview" 
                onClick={() => this.handleClick(card.name)}
                onDragStart={(event) => this.onDragStart(event, card.name)}
                draggable>
                <h4>{`${this.addSpacesToName(card.name)}`}</h4>
            </div>)
        });

        return(<div key={'new' + card.name} 
                className="card-preview" 
                onClick={() => this.handleClick(card.name)}
                onDragStart={(event) => this.onDragStart(event, card.name)}
                draggable>
                <h4>{`${this.addSpacesToName(card.name)}`}</h4>
            </div>)
    }
}

export default CardPreview;