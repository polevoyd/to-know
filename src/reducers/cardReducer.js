
const initialState =
{
    showCard: false,
    showCardName: null,
    user: '',
    cards: []
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

        case 'UPDATE':
            break;
        default:
            return state;
    }
}

export default cardReducer;