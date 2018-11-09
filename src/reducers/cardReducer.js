// initialising state
const initialState =
{
    showCard: false,
    showCardName: null,
    showCardData: null,
    showCardLink: null,
    user: '',
    cardsObjects: [],
    categoryColors: ['#FFFAE2', '#FCEC52', '#9FD356', '#000000'],
    menuIsOpened: false
}

const cardReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_CARDS':
            return {
                ...state,
                cardsObjects: action.newStateCardsArray
            }

        case 'ADD_USERNAME':
            return {...state, user: action.user }

        case 'SHOW_CARD':
        return {
            ...state,
            showCard: !state.showCard,
            showCardName: action.name,
            showCardLink: action.link
        }
        
        case 'HIDE_CARD':
        return {...initialState,
            showCard: !state.showCard,
            user: state.user,
            cardsObjects: state.cardsObjects
        }

        case 'CHANGE_CATEGORY':
        const newCardsArray = state.cardsObjects.map(card => {
            return (card.name === action.name) ? { name : card.name, category : action.newCategory} : card;
        })
        return { ...state,
            showCardName: '', showCardData: null, showCardLink: null, cardsObjects: newCardsArray
        }
 
        case 'SET_CODE_DATA':
            return {...state, showCardData: action.codeData }
        
        case 'UPDATE_STATE':
            return action.state;

        case 'UPDATE_COLORS':
            return { ...state, categoryColors: action.categoryColors }

        case 'TOGGLE_MENU':
            return { ...state, menuIsOpened: !state.menuIsOpened }

        case 'UPDATE_CARDS_ARRAY':
            return { ...state, cardsObjects: action.newCardsArray }

        default:
            return state;
    }
}

export default cardReducer;