import React from 'react';
import CardsResults from './CardsResults';
import SettingsTab from './SettingsTab';
import { connect } from 'react-redux';
import Greeting from './Greeting';
import {toggleMenu, updateCardsArray} from '../actions/actions';

class CardsMain extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuToggle = this.handleMenuToggle.bind(this);
        this.handleRefreshCards = this.handleRefreshCards.bind(this);
    }

    /***********************************************************/
    // returns link to repo
     
    checkForLinkToFetch() {
        if (localStorage.getItem('cardsState') && localStorage.getItem('cardsState').user) {
            return JSON.parse(localStorage.getItem('cardsState').user)
        } else if (this.props.cards.user) {
            return this.props.cards.user;
        } else {
            return 'https://github.com/polevoyd/cpp-challenges'
        }
    }

    /***********************************************************/
    // on refresh 

    handleRefreshCards = (event) => {
        event.preventDefault();

            const previousLink = this.checkForLinkToFetch();

            console.log(previousLink)

            const link = `https://to-know.herokuapp.com?repo=${previousLink}`;
            fetch(link)
            .then(res => res.json())
            .then(res => {
                return res.map(card => {
                    return {
                        name: card.name,
                        link: card.link,
                        category: 'new'
                    }
                })
            })
            .then((arrayOfCards) => {
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
                this.props.dispatch(updateCardsArray(newStateCardsArray));
                localStorage.clear();
            })
            .then(() => {
                // finally, saving updated state
                localStorage.setItem('cardsState', JSON.stringify(this.props.cards));
                // window.location.reload();
            })
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
                <CardsResults />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { cards: state }
}

export default connect(mapStateToProps)(CardsMain);