let initial_state = {
    money: 0,
}

let Reducer = (state= initial_state, action) => {    // defining initial state + listening to dispatched actions
    switch (action.type){
        case 'deposit':
            return {         // return {} is the new state
                ...state,
                money: state.money + action.payload,
            }
        case 'withdraw':
            return {         // return {} is the new state
                ...state,
                money: state.money - action.payload,
            }
            default:
                return state;   // avoid random actions
    }
}

export default Reducer;