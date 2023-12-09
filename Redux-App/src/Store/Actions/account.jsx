export let depositMoney = (amount) => {
    // code logic here if needed
    return (dispatch) => {                // the {} inside dispatch will reach to reducer under (action) name
        dispatch({                
            type: 'deposit',
            payload: amount,
        })
    }
}

export let withdrawMoney = (amount) => {
    // code logic here if needed
    return (dispatch) => {                 // the {} inside dispatch will reach to reducer under (action) name
        dispatch({
            type: 'withdraw',
            payload: amount,
        })
    }
}