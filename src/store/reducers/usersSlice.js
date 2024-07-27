import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: null,
    loading: true,
    error: null,
};

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        }),
            builder.addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            }),
            builder.addCase(fetchUsers.rejected, (state, action) => {
                (state.loading = false), (state.error = action.payload);
            });
    },
});

export { fetchUsers };
export default usersSlice.reducer;
