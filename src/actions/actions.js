
/*
 * action types 
 */

export const ADD_CARDS = 'ADD_CARDS'
export const SHOW_CARD = 'SHOW_CARD'


/*
 * action creators
 */

export function addCards(userName, arrayOfCards) {
    return { type: ADD_CARDS, user: userName, arrayOfCards } 
}
