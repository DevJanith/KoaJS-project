import * as api from '../api';

export const getCustomers = () => async (dispatch) => {
    try {
        const { data } = await api.getCustomers();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const createCustomer = (formData) => async (dispatch) => {
    try {
        const { data } = await api.createCustomer(formData);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const updateCustomer = (id, formData) => async (dispatch) => {
    try {
        const { data } = await api.updateCustomer(id, formData);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};


export const deleteCustomer = (id) => async (dispatch) => {
    try {
        await api.deleteCustomer(id);

        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error.message)
    }
}