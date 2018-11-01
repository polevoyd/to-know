
const initialState =
{
    showCard: false,
    showCardName: null,
    user: '',
    cards: [],
    groupToShow: 'group-one'
}

const cardReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_CARDS':
        
            return({
                showCard: false,
                showCardName: null,
                user: action.user,
                cards: action.arrayOfCards,
                groupToShow: state.groupToShow
            });

        case 'SHOW_CARD':
            return({
                showCard: !state.showCard,
                showCardName: action.name,
                user: state.user,
                cards: state.cards,
                groupToShow: state.groupToShow
            })
        
        case 'HIDE_CARD':
        return({
            showCard: !state.showCard,
            showCardName: '',
            user: state.user,
            cards: state.cards,
            groupToShow: state.groupToShow
        })

        case 'SET_FILTER':
            return({
                showCard: false,
                showCardName: state.showCardName,
                user: state.user,
                cards: state.cards,
                groupToShow: action.groupName
            })
           
        default:
            return state;
    }
}

export default cardReducer;