import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import type { Product } from '../db';
import type { SortField, SortOrder } from '../store/sortSlice';
import { selectFilteredProducts } from '../actions';

const sortProductsState = (state: RootState) => {
    return state.sorter;
};

const field = (state: RootState) => sortProductsState(state).field as SortField;
const order = (state: RootState) => sortProductsState(state).order as SortOrder;

export const sortedProducts = createSelector(
    [selectFilteredProducts, field, order],
    (products, field, order) => {
        return [...products].sort((a: Product, b: Product) => {
            if (field === 'price') {
                return (a.price - b.price) * (order === 'asc' ? 1 : -1);
            }
            if (field === 'popularity') {
                return (
                    (a.popularity - b.popularity) * (order === 'asc' ? 1 : -1)
                );
            }
            if (field === 'title') {
                return (
                    a.title.localeCompare(b.title, 'ru') *
                    (order === 'asc' ? 1 : -1)
                );
            }
            return 0;
        });
    }
);
