import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers';
import { thunk } from 'redux-thunk';

const store = createStore(
    reducers, // all the reducers combined
    {}, // default state
    applyMiddleware(thunk) // allow you to create async actions
);

export default store;