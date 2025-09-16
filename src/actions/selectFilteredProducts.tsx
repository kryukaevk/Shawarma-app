import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

const selectProductsState = (state: RootState) => {
    return state.productsList;
};

const selectAllProducts = (state: RootState) =>
    selectProductsState(state).products;

const selectCategory = (state: RootState) =>
    selectProductsState(state).selectedCategory;

export const selectFilteredProducts = createSelector(
    [selectAllProducts, selectCategory],
    (products, selectedCategory) => {
        if (!selectedCategory || selectedCategory === 'Все') return products;
        return products.filter((p) => p.category === selectedCategory);
    }
);
