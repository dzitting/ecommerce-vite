import { createSlice, createSelector } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalCartPrice: 0,
        changed: false,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                    image: newItem.image,
                    selectedColor: newItem.selectedColor,
                    selectedSize: newItem.selectedSize
                });
                state.totalCartPrice = (parseFloat(state.totalCartPrice) + parseFloat(newItem.price)).toFixed(2);
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = (parseFloat(existingItem.totalPrice) + parseFloat(newItem.price)).toFixed(2);
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload.id;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
                state.totalCartPrice = (parseFloat(state.totalCartPrice) - parseFloat(existingItem.price)).toFixed(2);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
        setColor(state, action) {
            const id = action.payload.id;
            const color = action.payload.color;
            const existingItem = state.items.find((item) => item.id === id);
            existingItem.selectedColor = color;
        },
        setSize(state, action) {
            const id = action.payload.id;
            const size = action.payload.size;
            const existingItem = state.items.find((item) => item.id === id);
            existingItem.selectedSize = size;
        }
    },
});

export const { replaceCart, addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
export const selectCart = createSelector(
    (state) => state.cart,
    (cart) => cart
);