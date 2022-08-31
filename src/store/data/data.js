import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubMenus, getMenus } from "../../services/service";

export const getMessages = createAsyncThunk(, async )

const dataSlice = createSlice({
  name: "messages",
  initialState: {
    messages: null,
    subMenu: [],
  },
  reducers: {
    addMessages: async (state, action) => {
      const id = action.payload;
      const { dataM } = await getSubMenus(id);
      state.messages = dataM;
    },
    addSubmenu: async (state) => {
      const dataS = await getMenus();
      state.subMenu = dataS;
    },
  },
});

export const { addMessages, addSubmenu } = dataSlice.actions;
export default dataSlice.reducer;
