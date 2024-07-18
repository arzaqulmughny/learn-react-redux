import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';

/**
 * Create store
 */
const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;
