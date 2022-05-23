import * as api from '../api';

export const getInventories = () => async (dispatch) => {
  try {
    const { data } = await api.getInventories();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message)
  }
}

export const createInventory = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createInventory(formData);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message)
  }
}

export const updateInventory = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.updateInventory(id, formData);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteInventory = (id) => async (dispatch) => {
  try {
    await api.deleteInventory(id);

    dispatch({ type: 'DELETE', payload: id })
  } catch (error) {
    console.log(error.message)
  }
}