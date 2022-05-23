import * as api from '../api';

export const getPromotions = () => async (dispatch) => {
    try {
        const { data } = await api.getPromotions();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const createPromotion = (formData) => async (dispatch) => {
    try {
        const { data } = await api.createPromotion(formData);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePromotion = (id, formData) => async (dispatch) => {
    try {
        const { data } = await api.updatePromotion(id, formData);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};


export const deletePromotion = (id) => async (dispatch) => {
    try {
        await api.deletePromotion(id);

        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error.message)
    }
}