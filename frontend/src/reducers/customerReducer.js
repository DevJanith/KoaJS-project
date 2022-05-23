const reducer = (customer = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
            break;
        case 'CREATE':
            return [...customer, action.payload];
            break;
        case 'UPDATE':
            return customer.map((cus) => (cus.id === action.payload.id ? action.payload : cus));
        case 'DELETE':
            return customer.filter((cus) => cus.id !== action.payload);
            break;
        default:
            return customer;
            break;
    }
}

export default reducer;