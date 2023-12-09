let initial_state = {
    users: {},
    loading: false,
    error: {},
}

let Reducer = (state= initial_state, action) => {    // defining initial state + listening to dispatched actions
    switch (action.type){
        case 'FETCH_USERS_STARTED':
            return {         // return {} is the new state
                ...state,
                loading: true,
            }
        case 'FETCH_USERS_SUCCEEDED':
            return {         // return {} is the new state
                ...state,
                loading: false,
                users: action.payload,
            }
        case 'FETCH_USERS_FAILED':
            return {         // return {} is the new state
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;   // avoid random actions
    }
}

export default Reducer;