import type { RootState } from '../store/store';

export const currentOrderData = (state: RootState) => {
    return state.orderData.orderArray;
};
