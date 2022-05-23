const reducer = (trader = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
            break;
        case 'CREATE':
            return [...trader, action.payload];
            break;
        case 'UPDATE':
            return trader.map((value) => (value.id === action.payload.id ? action.payload : value));
        case 'DELETE':
            return trader.filter((value) => value.id !== action.payload);
            break;
        default:
            return trader;
            break;
    }
}

export default reducer;