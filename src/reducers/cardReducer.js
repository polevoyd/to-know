// initialising state
const initialState =
{
    showCard: false,
    showCardName: null,
    showCardData: null,
    showCardLink: null,
    user: '',
    cardsObjects: []
}

const cardReducer = (state = initialState, action) => {

    // TODO
    // rewrite actions using spread operator for object? Object.assing()
    switch (action.type) {
        case 'ADD_CARDS':
            return({
                showCard: false,
                showCardName: null,
                showCardData: null,
                showCardLink: null,
                user: action.user,
                cardsObjects: action.arrayOfCards
            });

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
        
        default:
            return state;
    }
}

export default cardReducer;