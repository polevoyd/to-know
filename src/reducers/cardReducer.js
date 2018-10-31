
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
        console.log('Inside of reducer!')
            break;
        case 'UPDATE':
            break;
        default:
            return state;
    }
}

export default cardReducer;