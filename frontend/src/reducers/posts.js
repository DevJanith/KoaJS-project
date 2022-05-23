const reducer = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
            break;
        // case 'CREATE':
        //     return [...posts, action.payload];
        //     break;
        // case 'DELETE':
        //     return posts.filter((post) => post._id !== action.payload);
        //     break;
        default:
            return posts;
            break;
    }
}

export default reducer;