import { combineReducers, Dispatch, Action, AnyAction } from "redux";
import { all } from "redux-saga/effects";
import { ILayoutState } from "./layout/types";
import { layoutReducer } from "./layout/reducer";

export interface IApplicationState {
  layout: ILayoutState;
}

export interface IConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

export const rootReducer = combineReducers<IApplicationState>({
  layout: layoutReducer
});

export function* rootSaga() {
  yield all([]);
}
