import * as api from '../api';

export const getWishLists = () => async (dispatch) => {
    try {
        const { data } = await api.getWishLists();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const createWishList = (formData) => async (dispatch) => {
    try {
        const { data } = await api.createWishList(formData);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const updateWishList = (id, formData) => async (dispatch) => {
    try {
        const { data } = await api.updateWishList(id, formData);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};


export const deleteWishList = (id) => async (dispatch) => {
    try {
        await api.deleteWishList(id);

        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error.message)
    }
}