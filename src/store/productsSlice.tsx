import { createSlice } from '@reduxjs/toolkit';
import { type Product } from '../db';
import { fetchProducts } from '../actions';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [] as Product[],
        loading: false,
        error: null as string | null,
    },
    reducers: {
        // addToCard(state, action) {
        //     //empty
        // },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message || 'Ошибка загрузки продуктов';
            });
    },
});

export default productSlice.reducer;
