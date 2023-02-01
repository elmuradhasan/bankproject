
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState :any =  {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems" ) || "")
    : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

export const  cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item:any) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });       
      }
     localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item:any) => item.id === action.payload
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item:any) => item.id !== action.payload
        );

        state.cartItems = nextCartItems;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    increaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item:any) => item.id === action.payload
      );
      state.cartItems[itemIndex] = {
        ...state.cartItems[itemIndex],
        cartQuantity: state.cartItems[itemIndex].cartQuantity + 1,
      };
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {  
      state.cartItems.map((cartItem:any) => {
        if (cartItem.id === action.payload) {
          const nextCartItems = state.cartItems.filter(
            (item:any) => item.id !== cartItem.id
          );
          state.cartItems = nextCartItems;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      });
     
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal:any, cartItem:any) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      if (window.confirm("Are You sure delete all product from Cart")) {
        state.cartItems = [];
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        toast.error("Cart cleared", { position: "bottom-left" });
      }
    },
  },
});
export const { addToCart,decreaseCart,removeFromCart,increaseCart,clearCart,getTotals} =
  cartSlice.actions;

export default cartSlice.reducer;