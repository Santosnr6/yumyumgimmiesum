import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { product, qty } = action.payload;
            const existingIndex = state.findIndex(item => item.id === product.id);

            if (qty === 0) return state.filter(item => item.id !== product.id);


            if (existingIndex !== -1) {
                state[existingIndex] = { ...product, qty };
            } else {
                state.push({ ...product, qty });
            }
        },
        clearCart(state) {
            return [];
        }
    }
});

export const { addToCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;