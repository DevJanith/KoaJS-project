const reducer = (purchase = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
            break;
        case 'CREATE':
            return [...purchase, action.payload];
            break;
        case 'UPDATE':
            return purchase.map((value) => (value.id === action.payload.id ? action.payload : value));
        case 'DELETE':
            return purchase.filter((value) => value.id !== action.payload);
            break;
        default:
            return purchase;
            break;
    }
}

export default reducer;