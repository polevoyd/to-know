
/*
 * action types 
 */

export const ADD_CARDS = 'ADD_CARDS'
export const SHOW_CARD = 'SHOW_CARD'


/*
 * action creators
 */

function addCards(user, cards) {
    return { type: ADD_CARDS, user: user, cards } 
}

function showCard(name) {
    return { type: SHOW_CARD, name }
}
