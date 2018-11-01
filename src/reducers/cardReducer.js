
const initialState =
{
    showCard: false,
    showCardName: null,
    user: '',
    cards: [],
    new: [],
    active: [],
    complete: []
}

const cardReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_CARDS':
        
            return({
                showCard: false,
                showCardName: null,
                user: action.user,
                cards: action.arrayOfCards
            });

        case 'SHOW_CARD':
            return({
                showCard: !state.showCard,
                showCardName: action.name,
                user: state.user,
                cards: state.cards
            })
        
        case 'HIDE_CARD':
        return({
            showCard: !state.showCard,
            showCardName: '',
            user: state.user,
            cards: state.cards
        })

        case 'SET_FILTER':
            return({
                showCard: false,
                showCardName: state.showCardName,
                user: state.user,
                cards: state.cards
            })
           
        default:
            return state;
    }
}

export default cardReducer;