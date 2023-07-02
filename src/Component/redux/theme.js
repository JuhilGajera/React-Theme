import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: 'day',
    reducers: {
        toggleTheme: (state) => {
            state = state === 'day' ? 'night' : 'day';
            return state;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
