const reducer = (wishList = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
            break;
        case 'CREATE':
            return [...wishList, action.payload];
            break;
        case 'UPDATE':
            return wishList.map((value) => (value.id === action.payload.id ? action.payload : value));
        case 'DELETE':
            return wishList.filter((value) => value.id !== action.payload);
            break;
        default:
            return wishList;
            break;
    }
}

export default reducer;