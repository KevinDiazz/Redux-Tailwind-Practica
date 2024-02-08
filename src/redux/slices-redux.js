import { createSlice } from "@reduxjs/toolkit";
const manzanaSlice = createSlice({
  name: "fruta",
  initialState: { manzana: 0, pera: 0, platano: 0, sandia: 0, melon: 0 },
  reducers: {
    increment: (state, action) => {
      const fruta = action.payload;
      if (Object.keys(state).includes(fruta)) {
        console.log(state[fruta]);
        state[fruta] += 1;
      }
    },
    decrement: (state, action) => {
      const fruta = action.payload;
      if (Object.keys(state).includes(fruta)) {
        state[fruta]--;
      }
    },
    asyncValue:(state,action)=>{
        const valores=action.payload
        Object.keys(valores).forEach((value)=>{state[value]=valores[value]})
    }
  },
});

export const { increment, decrement,asyncValue } = manzanaSlice.actions;
export default manzanaSlice.reducer;
