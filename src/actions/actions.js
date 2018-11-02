
/*
 * action types 
 */

const ADD_CARDS = 'ADD_CARDS'



/*
 * action creators
 */

function addCards(user, cards) {
    return { type: ADD_CARDS, user: user, cards } 
}

