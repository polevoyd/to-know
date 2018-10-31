
const initialState =
{
    showCard: false,
    showCardName: null,
    cards: []
}

const cardReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_CARDS':
            return({
                showCard: false,
                showCardName: null,
                cards: action.arrayOfCards
            });
            
        case 'DELETE_CARD':
            break;
        case 'SHOW_CARD':
            return({
                showCard: !state.showCard,
                showCardName: action.name,
                cards: state.cards
            })
        
        case 'HIDE_CARD':
        return({
            showCard: !state.showCard,
            showCardName: '',
            cards: state.cards
        })

        case 'UPDATE':
            break;
        default:
            return state;
    }
}

export default cardReducer;