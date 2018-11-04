
/*
 * action types 
 */

export const ADD_CARDS = 'ADD_CARDS'
export const SHOW_CARD = 'SHOW_CARD'
export const HIDE_CARD = 'HIDE_CARD'
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
export const SET_CODE_DATA = 'SET_CODE_DATA'

/*
 * action creators
 */

export function addCards(userName, arrayOfCards) {
    return { type: ADD_CARDS, user: userName, arrayOfCards } 
}

export function showCard(name) {
    return { type: SHOW_CARD, name: name }
}

export function hideCard() {
    return { type: HIDE_CARD }
}

export function changeCategory(name, newCategory) {
    return { type: CHANGE_CATEGORY, name, newCategory }
}

export function setCodeData(codeData) {
    return { type: SET_CODE_DATA, codeData }
}


