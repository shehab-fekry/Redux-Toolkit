import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


// exporting aync API requist function
export let fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {
        return users;   // action payload
    })
    .catch(err => console.log(err))
})

// initialize a state
let initialState = {
    loading: false,
    users: [],
    error: '',
}

// defining reducer
let userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    // extraReducers for async requists | callback fumction with builder property for [pending - rejected - fulfilled] 
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => { state.loading = true }),
        builder.addCase(fetchUsers.rejected, (state, action) => { 
            state.loading = false;
            state.error = action.payload;
        }),
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false,
            state.users = action.payload;
        })
    },
})

// exporing userSlice reducer
export default userSlice.reducer;