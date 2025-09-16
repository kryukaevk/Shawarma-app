import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import sorterReducer from './sortSlice';
import orderDataReducer from './orderDataSlice';

const store = configureStore({
    reducer: {
        productsList: productsReducer,
        sorter: sorterReducer,
        orderData: orderDataReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
