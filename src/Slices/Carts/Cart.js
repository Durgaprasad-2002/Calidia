import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  totalWeight: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let item = action.payload;
      let flag = false;
      state.value.forEach((element) => {
        if (element.productName == item.productName) {
          element.quantity = Number(element.quantity) + Number(item.quantity);
          state.totalWeight += Number(item.quantity);
          flag = true;
          return;
        }
      });
      if (flag == false) {
        let val = action.payload;
        val.quantity = Number(val.quantity);
        state.totalWeight += val.quantity;
        state.value.push(val);
      }
    },
    removeItem: (state, action) => {
      let item = action.payload;

      let array = [];
      state.value.forEach((element) => {
        if (element.productName != item) {
          array.push(element);
        } else {
          state.totalWeight -= element.quantity;
        }
      });
      state.value = array;
    },
    updateCount: (state, action) => {
      let key = action.payload.key;
      let count = action.payload.count;
      if (count == true) {
        state.value[key].quantity++;
        state.totalWeight++;
      } else {
        state.value[key].quantity--;
        state.totalWeight--;
      }
    },
    clearCart: (state, action) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, updateCount, clearCart } =
  CartSlice.actions;

export default CartSlice.reducer;
