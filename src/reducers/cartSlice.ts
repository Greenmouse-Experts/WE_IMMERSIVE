import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type ICartItem = {
  image: string;
  productId: string;
  name: string;
  quantity: number;
  unitPrice: number;
  price: number;
};
export type CartTyping = {
  totalPrice: number;
  items: ICartItem[];
};
const initialState: CartTyping = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (existingProduct) {
        return;
        // existingProduct.quantity++;
        // existingProduct.price = existingProduct.price += action.payload.price;
      } else {
        state.items.push(action.payload);
      }
    },
    deleteProduct: (state, action) => {
      console.log(action.payload);
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      );
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.productId == action.payload);
      if (item) {
        item.quantity++;
        item.price = item.unitPrice * item.quantity;
      }
    },
    decreaseQuantity: (state, action) => {
      //payload = productId
      // console.log("productId", action)
      const item = state.items.find(
        (item) => item.productId === action.payload
      );

      if (item) {
        item.quantity--;
        item.price = item.unitPrice * item.quantity;

        if (item.quantity === 0)
          cartSlice.caseReducers.deleteProduct(state, action);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export const getTotalCartQuantity = (state: RootState) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state: RootState) =>
  state.cart.items.reduce((sum, item) => sum + item.price, 0);
export const getCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
