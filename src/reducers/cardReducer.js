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
            return({
                showCard: !state.showCard,
                showCardName: action.name,
                showCardData: state.showCardData,
                showCardLink: action.link,
                user: state.user,
                cardsObjects: state.cardsObjects
            })
        
        case 'HIDE_CARD':
        return({
            showCard: !state.showCard,
            showCardName: null,
            showCardData: null,
            showCardLink: null,
            user: state.user,
            cardsObjects: state.cardsObjects
        })

        case 'CHANGE_CATEGORY':
        const newCardsArray = state.cardsObjects.map(card => {
            return (card.name === action.name) ? { name : card.name, category : action.newCategory} : card;
        })
        return({
            showCard: state.showCard,
            showCardName: '',
            showCardData: null,
            showCardLink: null,
            user: state.user,
            cardsObjects: newCardsArray
        })

        case 'SET_CODE_DATA':
            return({
                showCard: state.showCard,
                showCardName: state.showCardName,
                showCardData: action.codeData,
                showCardLink: state.showCardLink,
                user: state.user,
                cardsObjects: state.cardsObjects
            })
        
        default:
            return state;
    }
}

export default cardReducer;