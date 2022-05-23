import axios from 'axios';

const url = 'http://localhost:5000';

const bookURL = url + "/book";
const customerURL = url + "/customer";
const cartURL = url + "/cart";
const inventoryURL = url + "/inventory";
const promotionURL = url + "/promotion";
const purchaseURL = url + "/purchase";
const traderURL = url + "/trader";
const wishListURL = url + "/wishlist";

//sample post API
// export const getPosts = () => axios.get(`${userURL}`);
// export const getPost = () => axios.get(`${userURL}`);
// export const createPost = () => axios.post(`${userURL}`);
// export const updatePost = () => axios.put(`${userURL}`);
// export const deletePost = () => axios.delete(`${userURL}`);

//customer API
export const getCustomers = () => axios.get(`${customerURL}`);
export const createCustomer = (data) => axios.post(`${customerURL}`, data);
export const updateCustomer = (id, updateData) => axios.put(`${customerURL}/${id}`, updateData);
export const deleteCustomer = (id) => axios.delete(`${customerURL}/${id}`);

//cart API
export const getCarts = () => axios.get(`${cartURL}`);
export const createCart = (data) => axios.post(`${cartURL}`, data);
export const updateCart = (id, updateData) => axios.put(`${cartURL}/${id}`, updateData);
export const deleteCart = (id) => axios.delete(`${cartURL}/${id}`);

//inventory API
export const getInventories = () => axios.get(`${inventoryURL}`);
export const createInventory = (data) => axios.post(`${inventoryURL}`, data);
export const updateInventory = (id, updateData) => axios.put(`${inventoryURL}/${id}`, updateData);
export const deleteInventory = (id) => axios.delete(`${inventoryURL}/${id}`);

//promotion API
export const getPromotions = () => axios.get(`${promotionURL}`);
export const createPromotion = (data) => axios.post(`${promotionURL}`, data);
export const updatePromotion = (id, updateData) => axios.put(`${promotionURL}/${id}`, updateData);
export const deletePromotion = (id) => axios.delete(`${promotionURL}/${id}`);

//purchase API
export const getPurchases = () => axios.get(`${purchaseURL}`);
export const createPurchase = (data) => axios.post(`${purchaseURL}`, data);
export const updatePurchase = (id, updateData) => axios.put(`${purchaseURL}/${id}`, updateData);
export const deletePurchase = (id) => axios.delete(`${purchaseURL}/${id}`);

//trader API
export const getTraders = () => axios.get(`${traderURL}`);
export const createTrader = (data) => axios.post(`${traderURL}`, data);
export const updateTrader = (id, updateData) => axios.put(`${traderURL}/${id}`, updateData);
export const deleteTrader = (id) => axios.delete(`${traderURL}/${id}`);

//wishlist API
export const getWishLists = () => axios.get(`${wishListURL}`);
export const createWishList = (data) => axios.post(`${wishListURL}`, data);
export const updateWishList = (id, updateData) => axios.put(`${wishListURL}/${id}`, updateData);
export const deleteWishList = (id) => axios.delete(`${wishListURL}/${id}`);

//book API
export const getBooks = () => axios.get(`${bookURL}`);



