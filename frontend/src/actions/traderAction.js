import * as api from '../api';

export const getTraders = () => async (dispatch) => {
    try {
        const { data } = await api.getTraders();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const createTrader = (formData) => async (dispatch) => {
    try {
        const { data } = await api.createTrader(formData);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const updateTrader = (id, formData) => async (dispatch) => {
    try {
        const { data } = await api.updateTrader(id, formData);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};


export const deleteTrader = (id) => async (dispatch) => {
    try {
        await api.deleteTrader(id);

        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error.message)
    }
}