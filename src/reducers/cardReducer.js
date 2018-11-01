
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
                cards: action.arrayOfCards,
                new: action.arrayOfCards,
                active: state.active,
                complete: state.complete
            });

        case 'SHOW_CARD':
            return({
                showCard: !state.showCard,
                showCardName: action.name,
                user: state.user,
                cards: state.cards,
                new: state.new,
                active: state.active,
                complete: state.complete
            })
        
        case 'HIDE_CARD':
        return({
            showCard: !state.showCard,
            showCardName: '',
            user: state.user,
            cards: state.cards,
            new: state.new,
            active: state.active,
            complete: state.complete
        })
           
        default:
            return state;
    }
}

export default cardReducer;