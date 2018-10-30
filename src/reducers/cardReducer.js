const cardReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_CARD':
            return state.concat([action.data]);
        case 'DELETE_CARD':
            break;
        case 'EDIT_CARD':
            break;
        case 'UPDATE':
            break;
        default:
            return state;
    }
}

export default cardReducer;