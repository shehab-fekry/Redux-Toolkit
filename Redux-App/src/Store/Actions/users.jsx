import axios from "axios";

export let getUsers = () => {
    return (dispatch) => {
        // initial action dispatch (loading...)
        dispatch({type: 'FETCH_USERS_STARTED'});

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(users => {
            // case of succeed
            dispatch({type: 'FETCH_USERS_SUCCEEDED', payload: users.data});
        })
        .catch( err => {
            // case of failure
            dispatch({type: 'FETCH_USERS_FAILED', payload: err});
        })
    }
}