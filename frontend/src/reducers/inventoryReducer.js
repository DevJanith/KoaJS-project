const reducer = (inventory = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
      break;
    case 'CREATE':
      return [...inventory, action.payload];
      break;
    case 'UPDATE':
      return inventory.map((value) => (value.id === action.payload.id ? action.payload : value));
    case 'DELETE':
      return inventory.filter((value) => value.id !== action.payload);
      break;
    default:
      return inventory;
      break;
  }
}

export default reducer;