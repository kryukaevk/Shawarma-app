import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Product } from '../db';
import { fetchProducts } from '../actions';

type ProductsState = {
    products: Product[];
    loading: boolean;
    error: string | null;
    selectedCategory: string;
};

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null,
        selectedCategory: 'Все',
    } as ProductsState,
    reducers: {
        setSelectedCategory(state, action: PayloadAction<string>) {
            state.selectedCategory = action.payload;
        },
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

export const { setSelectedCategory } = productSlice.actions;
export default productSlice.reducer;
