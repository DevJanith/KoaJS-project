import { combineReducers } from "redux";
import posts from './posts';
import customer from './customerReducer';
import cart from './cartReducer';
import inventory from './inventoryReducer';
import promotion from './promotionReducer';
import purchase from './purchaseReducer';
import trader from './traderReducer';
import wishList from './wishListReducer';


export default combineReducers({
    posts,
    customer,
    cart,
    inventory,
    promotion,
    purchase,
    trader,
    wishList
})