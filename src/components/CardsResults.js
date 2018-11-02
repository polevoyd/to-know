import React from 'react';
import CardForm from './CardForm';
import {connect} from 'react-redux';
import CardPreview from './CardPreview';

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
    // Drag start

    onDragStart(event, cardName){

        event.dataTransfer.setData('card', cardName);    
    }

    /***********************************************************/
    // Drag over

    onDragOver(event) {
        event.preventDefault();
    }

    /***********************************************************/
    // Drop

    onDrop(event, cat) {

        const name = event.dataTransfer.getData('card');
        const newCategory = cat;

        this.props.dispatch({
            type: 'CHANGE_CATEGORY',
            name,
            newCategory
        })
    }

    /***********************************************************/
    
    render(){
        return(
            <div className="cards-all-results">
                {this.props.cards.showCard ? 
                <CardForm cardToShow={this.addSpacesToName(this.props.cards.showCardName)} user={this.props.cards.user} handlePanelClicks={this.handlePanelClicks}/> : null}
                <div className="drag-sections">
                    <div onDragOver={(event) => this.onDragOver(event)} onDrop={(event) => this.onDrop(event, 'new')} className="new">
                        <CardPreview cards={this.props.cards} category="new" onDragStart={this.onDragStart} handleClick={this.handleClick} addSpacesToName={this.addSpacesToName}/>
                        </div>
                    <div onDragOver={(event) => this.onDragOver(event)} onDrop={(event) => this.onDrop(event, 'active')} className="active">
                        <CardPreview cards={this.props.cards} category="active" onDragStart={this.onDragStart} handleClick={this.handleClick} addSpacesToName={this.addSpacesToName}/>
                        </div>
                    <div onDragOver={(event) => this.onDragOver(event)} onDrop={(event) => this.onDrop(event, 'complete')} className="complete">
                        <CardPreview cards={this.props.cards} category="complete" onDragStart={this.onDragStart} handleClick={this.handleClick} addSpacesToName={this.addSpacesToName}/>
                    </div> 
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