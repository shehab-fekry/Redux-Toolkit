import { createSlice } from '@reduxjs/toolkit';

// initializing a state
let initialState = {
    counter: 0,
}

// defining the reducer
let counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // (action) parameter not needed because no payloads passed
        incement: (state) => { state.counter += 1 },
        decrement: (state) => { state.counter -= 1 },
        // (action) parameter used due to payloads exist
        incementPayload: (state, action) => { state.counter += action.payload },
        decrementPayload: (state, action) => { state.counter -= action.payload },
    },
})

// exporting counterSlice actions and reducer
export const { incement, incementPayload, decrement, decrementPayload } = counterSlice.actions;
export default counterSlice.reducer;

