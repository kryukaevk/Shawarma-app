import { createAsyncThunk } from '@reduxjs/toolkit';
import { PRODUCTS_MOCK, type Product } from '../db';

export const fetchProducts = createAsyncThunk<Product[], void>(
    'products/fetchProducts',
    async function (): Promise<Product[]> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(PRODUCTS_MOCK), 200);
        });
    }
);
