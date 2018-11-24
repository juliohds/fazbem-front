import { Reducer } from "redux";
import { ILayoutState, LayoutActionTypes } from "./types";

// Type-safe initialState!
const initialState: ILayoutState = {
  transparentClass: "transparent",
  isOpen: false,
  isLogged: false
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<ILayoutState> = (state = initialState, action) => {
  switch (action.type) {
    case LayoutActionTypes.SET_TRANSPARENTCLASS: {
      return { ...state, transparentClass: action.payload };
    }
    case LayoutActionTypes.SET_ISOPEN: {
      return { ...state, isOpen: action.payload };
    }
    case LayoutActionTypes.SET_LOGGED: {
      return { ...state, isLogged: action.payload };
    }
    default: {
      return state;
    }
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as layoutReducer };
