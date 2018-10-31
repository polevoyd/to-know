
const initialState =
{
    showCard: false,
    showCardName: null,
    link: '',
    cards: []
}

const cardReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_CARDS':
            return({
                showCard: false,
                showCardName: null,
                link: state.link,
                cards: action.arrayOfCards
            });
            
        case 'SET_LINK':
            return({
                showCard: false,
                showCardName: null,
                link: action.link,
                cards: action.arrayOfCards
            });
        case 'SHOW_CARD':
            return({
                showCard: !state.showCard,
                showCardName: action.name,
                link: state.link,
                cards: state.cards
            })
        
        case 'HIDE_CARD':
        return({
            showCard: !state.showCard,
            showCardName: '',
            link: state.link,
            cards: state.cards
        })

        case 'UPDATE':
            break;
        default:
            return state;
    }
}

export default cardReducer;