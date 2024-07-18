import { createSlice } from '@reduxjs/toolkit';

/**
 * Create counter reducer
 */
const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        decrement: (state) => {
            return state - 1;
        },
        increment: (state) => {
            return state + 1;
        },
    },
});

export const { decrement, increment } = counterSlice.actions;
export default counterSlice.reducer;
