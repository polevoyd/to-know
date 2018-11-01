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
    // on drag start
    onDragStart(event, cardName){

        console.log(cardName)
    }

    /***********************************************************/
    // on drag over
    onDragOver(event) {

        console.log(event)
    }

    /***********************************************************/
    // rendering

    render(){
        
        // const filterAndRenderCards = this.props.cards.cards.map(card => (
        //     <div key={card.name} className="card-preview" onClick={() => this.handleClick(card.name)}>
        //         <h4>{`${this.addSpacesToName(card.name)}`}</h4>
        //     </div>
        // ));

        ///////////////////////////////////////////////////

        
        const filterNew = this.props.cards.new.map(card => {
            return(<div key={card.name} 
                className="card-preview" 
                onClick={() => this.handleClick(card.name)}
                onDragStart={(event) => this.onDragStart(event, card.name)}
                draggable>
                <h4>{`${this.addSpacesToName(card.name)}`}</h4>
            </div>)
        });

        const filterActive = this.props.cards.active.map(card => {
            return(<div key={card.name} 
                className="card-preview" 
                onClick={() => this.handleClick(card.name)}
                onDragStart={(event) => this.onDragStart(event, card.name)}
                draggable>
                <h4>{`${this.addSpacesToName(card.name)}`}</h4>
            </div>)
        });

        const filterComplete = this.props.cards.complete.map(card => {
            return(<div key={card.name} 
                className="card-preview" 
                onClick={() => this.handleClick(card.name)} 
                onDragStart={(event) => this.onDragStart(event, card.name)} 
                draggable>
                <h4>{`${this.addSpacesToName(card.name)}`}</h4>
            </div>)
        });
        


        // const filterAndRenderCards = this.props.cards.cards.map(card => {
        //     return(<div key={card.name} 
        //         className="card-preview" 
        //         onClick={() => this.handleClick(card.name)}
        //         onDragStart={(event) => this.onDragStart(event, card.name)}
        //         draggable>
        //         <h4>{`${this.addSpacesToName(card.name)}`}</h4>
        //     </div>)
        // });



 







        ///////////////////////////////////////////////////
        return(
            <div className="cards-all-results">
                {this.props.cards.showCard ? <CardForm 
                                            cardToShow={this.addSpacesToName(this.props.cards.showCardName)} 
                                            user={this.props.cards.user} handlePanelClicks={this.handlePanelClicks}/> : null}
                <div className="drag-sections">
                    <div onDragOver={(event) => this.onDragOver(event)} className="new">{filterNew}</div>
                    <div onDragOver={(event) => this.onDragOver(event)} className="active">{filterActive}</div>
                    <div onDragOver={(event) => this.onDragOver(event)} className="done">{filterComplete}</div> 
                </div>
                              
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