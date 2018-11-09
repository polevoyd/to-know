import React from 'react';
import CardsResults from './CardsResults';
import SettingsTab from './SettingsTab';
import { connect } from 'react-redux';
import Greeting from './Greeting';
import {addCards, toggleMenu, updateCardsArray} from '../actions/actions';

class CardsMain extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuToggle = this.handleMenuToggle.bind(this);
        this.handleRefreshCards = this.handleRefreshCards.bind(this);
    }

    /***********************************************************/
    // on refresh 

    handleRefreshCards = (event) => {
        event.preventDefault();

        if (localStorage.getItem('cardsState')) {
            
            const previousLink = JSON.parse(localStorage.getItem('cardsState')).user;
            const link = `https://to-know.herokuapp.com?repo=${previousLink}`;
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
                
                //////////////////////////////////////////////////
                //////////////////////////////////////////////////
                //////////////////////////////////////////////////

                console.log(newStateCardsArray)

                // send updated cards
                this.props.dispatch(updateCardsArray(newStateCardsArray));
                localStorage.clear();
            })
            .then(() => {
                // finally, saving updated state
                localStorage.setItem('cardsState', JSON.stringify(this.props.cards));
                // window.location.reload();
            })
        } else {
            console.log('There is no previously saved link.')
        }
    }

    /***********************************************************/
    // Toggle a menu

    handleMenuToggle(){
        this.props.dispatch(toggleMenu());
    }

    /***********************************************************/

    render(){
        return(
            <div>
                <div className="menu-icon" onClick={this.handleMenuToggle}><i className="far fa-caret-square-down"></i></div>
                <div className="refresh-icon" onClick={this.handleRefreshCards}><i className="fas fa-retweet"></i></div>
                {this.props.cards.menuIsOpened ? <SettingsTab /> : null}
                {localStorage.getItem('cardsState') ? null : <Greeting />}
                <CardsResults />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { cards: state }
}

export default connect(mapStateToProps)(CardsMain);