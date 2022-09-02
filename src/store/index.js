import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";

const initialState = {
  subMenus: [],
  messages: null,
  id: null,
};

const enhancer = compose(applyMiddleware(thunk));

const state = (state = initialState, action) => {
  switch (action.type) {
    case "submenus":
      return {
        ...state,
        subMenus: action.payload,
      };
    case "messages":
      return {
        ...state,
        messages: action.payload,
      };
    case "id":
      return {
        ...state,
        id: action.payload,
      };
    default:
      return { ...state };
  }
};

const store = createStore(state, enhancer);

export default store;
