
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
        
        const modifiedCard = {
            name: action.name,
            category: action.newCategory
        }
        
        let stateCopy = state;
        stateCopy[action.newCategory] = stateCopy[action.newCategory].concat(modifiedCard);
        stateCopy[action.oldCategory] = stateCopy[action.oldCategory].filter(card => card.name !== action.name );
        
        console.log(stateCopy);

        return stateCopy;
        
        default:
            return state;
    }
}

export default cardReducer;