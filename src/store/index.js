import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import usersReducer from './reducers/usersSlice';

/**
 * Create store
 */
const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
    },
});

export default store;
