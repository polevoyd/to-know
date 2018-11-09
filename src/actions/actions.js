
/*
 * action types 
 */

export const ADD_CARDS = 'ADD_CARDS'
export const ADD_REPO = 'ADD_REPO' 
export const SHOW_CARD = 'SHOW_CARD'
export const HIDE_CARD = 'HIDE_CARD'
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
export const SET_CODE_DATA = 'SET_CODE_DATA'
export const UPDATE_STATE = 'UPDATE_STATE'
export const ADD_USERNAME = 'ADD_USERNAME'
export const UPDATE_COLORS = 'UPDATE_COLORS'
export const TOGGLE_MENU = 'TOGGLE_MENU'
export const UPDATE_CARDS_ARRAY = 'UPDATE_CARDS_ARRAY'

/*
 * action creators
 */

export function addCards(newStateCardsArray) {
    return { type: ADD_CARDS, newStateCardsArray } 
}

export function showCard(name, link) {
    return { type: SHOW_CARD, name: name, link }
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

export function updateState(state) {
    return { type: UPDATE_STATE, state }
}

export function addUsername(userName) {
    return { type: ADD_USERNAME, user: userName }
}

export function updateColors(newColors) {
    return { type: UPDATE_COLORS, categoryColors: newColors }
}

export function toggleMenu() {
    return { type: TOGGLE_MENU }
}

export function updateCardsArray(newStateCardsArray) {
    return { type: UPDATE_CARDS_ARRAY, newCardsArray: newStateCardsArray }
}