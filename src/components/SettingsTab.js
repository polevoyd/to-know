import React from 'react';
import {connect} from 'react-redux';
import {addCards, toggleMenu} from '../actions/actions';
import {addUsername} from '../actions/actions';
import {updateColors} from '../actions/actions';

/***********************************************************/

class SettingsTab extends React.Component {

    constructor(props){
        super(props);
        this.handleLinkSubmit = this.handleLinkSubmit.bind(this);
    }

    /***********************************************************/
    // on submit 

    handleLinkSubmit(event) {
        event.preventDefault();
        event.persist();

        // validation
        const valid = new RegExp(/^\https:\/\/github.com\/\w{1,15}\/.{1,70}/);

        if (valid.test(event.target[0].value.trim())){
            
            const link = `https://to-know.herokuapp.com?repo=${event.target[0].value}`;
            fetch(link)
            .then(res => res.json())
            .then(res => {

                // get array of cards and dispatch it
                const arrayOfCards = res.map(card => {
                    return {
                        name: card.name,
                        link: card.link,
                        category: 'new'
                    }
                })
                this.props.dispatch(addUsername(event.target[0].value));
                return arrayOfCards;
            })
            .then((arrayOfCards) => {
                // save updated state in a local storage
                // here we need to save current state to a local storage
                // but first, check for a cards that already been moved

                let newStateCardsArray = arrayOfCards;

                if (localStorage.getItem('cardsState')) {
                    
                    // if we already have some set in local storage
                    let oldState = JSON.parse(localStorage.getItem('cardsState')).cardsObjects;
                    const cardsWithChangedCategories = oldState.filter(card => card.category !== 'new');

                    // checking for alternated categories
                    for (let card of cardsWithChangedCategories) {
                        for (let cardNew of newStateCardsArray) {
                            if (card.name === cardNew.name) {
                                cardNew.category = card.category;
                            }
                        }
                    }
                }
                
                // send updated cards
                this.props.dispatch(addCards(newStateCardsArray));
            })
            .then(() => {
                // finally, saving updated state
                localStorage.setItem('cardsState', JSON.stringify(this.props.cards));
                this.props.dispatch(toggleMenu())
            })
        } else {
            console.log('Wrong link format!')
        }
    }
    
    /***********************************************************/
    // on color changes

    handleColorChange = (event) => {

        const one = document.querySelector('#color-one').value;
        const two = document.querySelector('#color-two').value;
        const three = document.querySelector('#color-three').value;
        const fontColor = document.querySelector('#color-font').value;

        this.props.dispatch(updateColors([one, two, three, fontColor]));
        localStorage.setItem('cardsState', JSON.stringify(this.props.cards));
    }

    /***********************************************************/
    // returns link: users or default

    setRepositoryLink() {
        if (localStorage.getItem('cardsState')) {
            return JSON.parse(localStorage.getItem('cardsState')).user;
        } else {
            return 'https://github.com/polevoyd/to-know-content';
        }
    }

    /***********************************************************/
    // cleans storage and reload page

    handleResetButtonClick() {
        localStorage.removeItem('cardsState');
        window.location.reload();
    }

    /***********************************************************/
    render(){

        return(
            <div className="settings-tab" onMouseLeave={this.handleMouseOut}>
                <p className="text-block">Paste a link to a repository and click <b>'Upload'</b> to start.<br></br><br></br> Press <b>'Reset'</b> button to remove all the cards.</p>
                <div className="add-card">
                    <form onSubmit={this.handleLinkSubmit}>
                        <label> Link:<input type="text" defaultValue={this.setRepositoryLink()}/>
                        </label>
                        <input type="submit" value="Upload"/>
                    </form>
                </div>
                <div className="picker-one">
                    <label>First Category: </label>
                    <input onChange={this.handleColorChange} type="color" id="color-one" name="color-one" value={this.props.cards.categoryColors[0]}></input> 
                </div>
                <div className="picker-two">
                    <label>Second Category: </label>
                    <input onChange={this.handleColorChange} type="color" id="color-two" name="color-two" value={this.props.cards.categoryColors[1]}></input>
                </div>
                <div className="picker-three">
                    <label>Third Category: </label>
                    <input onChange={this.handleColorChange} type="color" id="color-three" name="color-three" value={this.props.cards.categoryColors[2]}></input>
                </div>
                <div className="button-reset">
                   <button onClick={this.handleResetButtonClick}>Reset</button>
                </div>
                <div className="picker-font">
                    <label>Font: </label>
                    <input onChange={this.handleColorChange} type="color" id="color-font" name="color-font" value={this.props.cards.categoryColors[4]}></input>
                </div>
                <p className="name-tag"><a href="http://www.polevoy.in" target="blank">www.polevoy.in</a> </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {cards: state}
}

// connect gives access to dispatch as a prop
export default connect(mapStateToProps)(SettingsTab);