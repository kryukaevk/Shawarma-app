import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { OrderData } from '../types/types';

type orderDataState = {
    orderArray: OrderData[];
};

const loadFromLocalStorage = (): OrderData[] => {
    try {
        const serializedState = localStorage.getItem('cart');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState) as OrderData[];
    } catch (e) {
        console.error('Ошибка при загрузке данных из localStorage:', e);
        return [];
    }
};

const orderDataSlice = createSlice({
    name: 'orderData',
    initialState: {
        orderArray: loadFromLocalStorage(),
    } as orderDataState,
    reducers: {
        addToCart(state, action: PayloadAction<OrderData>) {
            const existingOrder = state.orderArray.find(
                (order) =>
                    order.productId === action.payload.productId &&
                    order.selectedSauce === action.payload.selectedSauce &&
                    order.selectedWeight === action.payload.selectedWeight
            );
            if (existingOrder) {
                existingOrder.count += action.payload.count;
                existingOrder.price += action.payload.count;
            } else {
                state.orderArray.push(action.payload);
            }

            try {
                localStorage.setItem('cart', JSON.stringify(state.orderArray));
            } catch (e) {
                console.error('Ошибка при сохранении в localStorage:', e);
            }
        },
        clearCart(state) {
            state.orderArray = [];
            try {
                localStorage.removeItem('cart');
            } catch (e) {
                console.error('Не удалось удалить данные из localStorage', e);
            }
        },
        removeItemFromCart(state, action: PayloadAction<OrderData>) {
            state.orderArray = state.orderArray.filter(
                (order) =>
                    !(
                        order.productId === action.payload.productId &&
                        order.selectedSauce === action.payload.selectedSauce &&
                        order.selectedWeight === action.payload.selectedWeight
                    )
            );

            try {
                localStorage.setItem('cart', JSON.stringify(state.orderArray));
            } catch (e) {
                console.error(
                    'Ошибка при обновлении данных в localStorage:',
                    e
                );
            }
        },
    },
});

export const { addToCart, clearCart, removeItemFromCart } =
    orderDataSlice.actions;
export default orderDataSlice.reducer;
