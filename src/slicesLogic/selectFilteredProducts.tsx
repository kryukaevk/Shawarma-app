import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { searchResults } from './searchProducts';

const selectProductsState = (state: RootState) => {
    return state.productsList;
};

const selectCategory = (state: RootState) =>
    selectProductsState(state).selectedCategory;

export const selectFilteredProducts = createSelector(
    [searchResults, selectCategory],
    (products, selectedCategory) => {
        if (!selectedCategory || selectedCategory === 'Все') return products;
        return products.filter((p) => p.category === selectedCategory);
    }
);
