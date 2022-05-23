const reducer = (cart = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
            break;
        case 'CREATE':
            return [...cart, action.payload];
            break;
        case 'UPDATE':
            return cart.map((value) => (value.id === action.payload.id ? action.payload : value));
        case 'DELETE':
            return cart.filter((value) => value.id !== action.payload);
            break;
        default:
            return cart;
            break;
    }
}

export default reducer;