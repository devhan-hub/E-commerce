import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem:(state , action)=> {
             const newItem = action.payload;

             const existingItem = state.cartItems.find((item)=>item.id === newItem.id)
             state.totalQuantity++;

             if(!existingItem) {
                state.cartItems.push({...newItem , quantity :1})
             }
             else {
                existingItem.quantity++;
                existingItem.totalPrice= Number(existingItem.totalPrice) + Number(newItem.price)
             }

             state.totalAmount = state.cartItems.reduce((total ,item )=> total + Number(item.price )* Number(item.quantity) , 0)
        },
        removeItem:(state , action)=>{
            const removeItemId = action.payload;
            const existingItem = state.cartItems.find((item)=>item.id === removeItemId)
            if(existingItem){
                state.cartItems = state.cartItems.filter((item)=>item.id !== removeItemId)
               state.totalQuantity= state.totalQuantity-existingItem.quantity;
            }
            state.totalAmount = state.cartItems.reduce((total ,item )=> total + Number(item.price )* Number(item.quantity) , 0)

        }
    }
});

export const {addItem , removeItem} = cartSlice.actions;
export default cartSlice.reducer;