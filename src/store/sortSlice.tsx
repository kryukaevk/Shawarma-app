import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type SortField = 'popularity' | 'price' | 'title';
export type SortOrder = 'asc' | 'desc';

interface SortState {
    field: SortField;
    order: SortOrder;
}

const sortSlice = createSlice({
    name: 'sort',
    initialState: {
        field: 'popularity',
        order: 'desc',
    } as SortState,
    reducers: {
        setSort(state, action: PayloadAction<SortState>) {
            state.field = action.payload.field;
            state.order = action.payload.order;
        },
        setField(state, action: PayloadAction<SortField>) {
            state.field = action.payload;
        },
        setOrder(state, action: PayloadAction<SortOrder>) {
            state.order = action.payload;
        },
    },
});

export const { setOrder, setField, setSort } = sortSlice.actions;
export default sortSlice.reducer;
