import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import sorterReducer from './sortSlice';

const store = configureStore({
    reducer: {
        productsList: productsReducer,
        sorter: sorterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
