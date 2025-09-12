import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

const selectProductsState = (state: RootState) => {
    return state.productsList;
};

const selectAllProducts = (state: RootState) =>
    selectProductsState(state).products;

const searchProduct = (state: RootState) =>
    selectProductsState(state).searchQuery;

export const searchResults = createSelector(
    [selectAllProducts, searchProduct],
    (products, searchProduct) => {
        if (!searchProduct || searchProduct === ' ') return products;
        return products.filter((p) =>
            p.title.toLowerCase().includes(searchProduct.toLowerCase())
        );
    }
);
