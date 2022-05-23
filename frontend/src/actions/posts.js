import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

// export const createPost = (values) => async (dispatch) => {
//     try {
//         const { data } = await api.createPost(values);
//         dispatch({ type: 'CREATE', payload: data });
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// export const deletePost = (id) => async (dispatch) => {
//     try {
//         await api.deletePost(id);

//         dispatch({ type: 'DELETE', payload: id })
//     } catch (error) {
//         console.log(error.message)
//     }
// }