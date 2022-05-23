const reducer = (promotion = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
            break;
        case 'CREATE':
            return [...promotion, action.payload];
            break;
        case 'UPDATE':
            return promotion.map((value) => (value.id === action.payload.id ? action.payload : value));
        case 'DELETE':
            return promotion.filter((value) => value.id !== action.payload);
            break;
        default:
            return promotion;
            break;
    }
}

export default reducer;