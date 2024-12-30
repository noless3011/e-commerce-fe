// app/redux/slices/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Order from '@/app/types/Order';

interface CartState {
    orders: Order[];
}

const initialState: CartState = {
    orders: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<Order>) => {
            const isProductInCart = state.orders.some(order => order.productId === action.payload.productId);
            if (!isProductInCart) {
                state.orders.push(action.payload);
            }
        },
        removeOrder: (state, action: PayloadAction<number>) => {
            state.orders = state.orders.filter(order => order.productId !== action.payload);
        },
        updateOrderStatus: (state, action: PayloadAction<{ productId: number, status: Order['status'] }>) => {
            const order = state.orders.find(order => order.productId === action.payload.productId);
            if (order) {
                order.status = action.payload.status;
            }
        },
        increaseOrderAmount: (state, action: PayloadAction<number>) => {
            const order = state.orders.find(order => order.productId === action.payload);
            if (order) {
                order.amount += 1;
            }
        },
        // You can add decreaseOrderAmount if needed, but removing when quantity is 0 might be sufficient
        // decreaseOrderAmount: (state, action: PayloadAction<number>) => {
        //     const order = state.orders.find(order => order.productId === action.payload);
        //     if (order && order.amount > 1) {
        //         order.amount -= 1;
        //     }
        // },
    },
});

export const { addOrder, removeOrder, updateOrderStatus, increaseOrderAmount } = cartSlice.actions;

export default cartSlice.reducer;