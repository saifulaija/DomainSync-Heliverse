// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";


// interface CartItem {
//   _id: string;
//   userQuantity: number;
//   [key: string]: any;
// }

// interface UserState {
//   cartItems: CartItem[];
//   userTotalQuantity: number;
// }

// const initialState: UserState = {
//   cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
//   userTotalQuantity: 0,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<CartItem>) => {
//       const existingIndex = state.cartItems.findIndex(
//         (item) => item._id === action.payload._id
//       );

//       if (existingIndex >= 0) {
//         state.cartItems[existingIndex].userQuantity += 1;
//         toast.info("Increased user quantity", { position: "bottom-left" });
//       } else {
//         state.cartItems.push({ ...action.payload, userQuantity: 1 });
//         toast.success("Product added to user", { position: "bottom-left" });
//       }
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//     },
//     removeFromCart: (state, action: PayloadAction<{ _id: string }>) => {
//       const nextCartItems = state.cartItems.filter(
//         (item) => item._id !== action.payload._id
//       );
//       state.cartItems = nextCartItems;
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//       toast.error("Product removed from user", { position: "bottom-left" });
//     },
//     clearCart: (state) => {
//       state.cartItems = [];
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//       toast.error("User cleared", { position: "bottom-left" });
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = userSlice.actions;
// export default userSlice.reducer;



import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface CartItem {
  _id: string;
  userQuantity: number;
  [key: string]: any;
}
export interface UserState {
  cartItems: CartItem[];
  userTotalQuantity: number;
}
// interface UserState {
//   cartItems: CartItem[];
//   userTotalQuantity: number;
// }

const initialState: UserState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
  userTotalQuantity: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex >= 0) {
        toast.success("User already added", { position: "bottom-left" });
      } else {
        state.cartItems.push({ ...action.payload, userQuantity: 1 });
        toast.success("User added", { position: "bottom-left" });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action: PayloadAction<{ _id: string }>) => {
      const nextCartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("User removed", { position: "bottom-left" });
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = userSlice.actions;
export default userSlice.reducer;

