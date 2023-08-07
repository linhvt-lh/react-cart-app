import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

export const CartSlice = createSlice({
    name: "cartSlice",
    initialState : {
        items:localStorage.getItem("cartData") ? JSON.parse(localStorage.getItem("cartData")) :  [],
        totalPrice:0,
        isRemovingItem: false,
    },
    reducers:{
        addToCart: (state, action) => {
            const product = action.payload;
            const productID = product._id;
            const existIndex = state.items.findIndex((item) => {
                return item.id === productID;
            });
            if( existIndex >= 0 ){
                state.items[existIndex] = {
                    id: productID,
                    quantity: state.items[existIndex].quantity + 1,
                    price: product.price
                }
            }else{
                const newCartItem = { id: productID, quantity : 1, price: product.price}
                state.items.push(newCartItem);
            }
            toast.info("Add to cart succesfully!", {
                position: "bottom-left",
            });
            localStorage.setItem("cartData", JSON.stringify(state.items));

        },
        removeCartItem: (state, action) => {
            state.isRemovingItem = true;
            const productId= action.payload;
            const newCartItem = state.items.filter((item) => {
                if(item.id != productId){
                    return item;
                }
            });
            state.items = newCartItem;
            toast.info("Remove product from cart succesfully!", {
                position: "bottom-left",
            });
            localStorage.setItem("cartData", JSON.stringify(state.items));
        },
    }
});

export const { addToCart, removeCartItem } = CartSlice.actions;
export default CartSlice.reducer;

const RemoveLisner = (state, items) => {
    sendSocket(items);
}, CartSlice.removeCartItem;