import * as api from '../api';

export const getCarts = () => async (dispatch) => {
    try {
        const { data } = await api.getCarts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const createCart = (formData) => async (dispatch) => {
    try {
        const { data } = await api.createCart(formData);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const updateCart = (id, formData) => async (dispatch) => {
    try {
        const { data } = await api.updateCart(id, formData);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};


export const deleteCart = (id) => async (dispatch) => {
    try {
        await api.deleteCart(id);

        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error.message)
    }
}