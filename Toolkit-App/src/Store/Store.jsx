import { configureStore } from '@reduxjs/toolkit';

// importing slices of the app
import counterSlice from './Slices/counterSlice';
import userSlice from './Slices/userSlice';

const Store = configureStore({   // combining reducers to form the application store
    reducer: {
        counterSlice,
        userSlice,
    }
});

export default Store;