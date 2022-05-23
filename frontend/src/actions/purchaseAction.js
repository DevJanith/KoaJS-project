import * as api from '../api';

export const getPurchases = () => async (dispatch) => {
    try {
        const { data } = await api.getPurchases();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const createPurchase = (formData) => async (dispatch) => {
    try {
        const { data } = await api.createPurchase(formData);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePurchase = (id, formData) => async (dispatch) => {
    try {
        const { data } = await api.updatePurchase(id, formData);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};


export const deletePurchase = (id) => async (dispatch) => {
    try {
        await api.deletePurchase(id);

        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error.message)
    }
}