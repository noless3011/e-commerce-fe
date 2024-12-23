import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from '../types/Product';
import { clear } from 'console';

interface InspectorState {
    viewProduct: Product | null;
    sentProduct: Product | null;
}

const initialState: InspectorState = {
    viewProduct: null,
    sentProduct: null,
};

const inspectorSlice = createSlice({
    name: 'inspector',
    initialState,
    reducers: {
        setViewProduct: (state, action: PayloadAction<Product>) => {
            state.viewProduct = action.payload;
        },
        clearViewProduct: (state) => {
            state.viewProduct = null;
        },
        setSentProduct: (state, action: PayloadAction<Product>) => {
            state.sentProduct = action.payload;
        },
        clearSentProduct: (state) => {
            state.sentProduct = null;
        }
    },
});

export const { setViewProduct: setProduct, clearViewProduct: clearProduct } = inspectorSlice.actions;

export default inspectorSlice.reducer;