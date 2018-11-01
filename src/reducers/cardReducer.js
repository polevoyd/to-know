
const initialState =
{
    showCard: false,
    showCardName: null,
    user: '',
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
                new: action.arrayOfCards,
                active: state.active,
                complete: state.complete
            });

        case 'SHOW_CARD':
            return({
                showCard: !state.showCard,
                showCardName: action.name,
                user: state.user,
                new: state.new,
                active: state.active,
                complete: state.complete
            })
        
        case 'HIDE_CARD':
        return({
            showCard: !state.showCard,
            showCardName: '',
            user: state.user,
            new: state.new,
            active: state.active,
            complete: state.complete
        })

        case 'CHANGE_CATEGORY':
        console.log(action)
        
        
           
        default:
            return state;
    }
}

export default cardReducer;