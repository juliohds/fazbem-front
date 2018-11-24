import { setTransparentClass, setIsOpen, setLogged } from "./actions";

export interface IHeaderPropsFromState {
  transparentClass: string;
  isOpen: boolean;
  isLogged: boolean;
}

export interface IHeaderPropsFromDispatch {
  setTransparentClass: typeof setTransparentClass;
  setIsOpen: typeof setIsOpen;
  setLogged: typeof setLogged;
}

export const enum LayoutActionTypes {
  SET_TRANSPARENTCLASS = "@@layout/SET_TRANSPARENTCLASS",
  SET_ISOPEN = "@@layout/SET_ISOPEN",
  SET_LOGGED = "@@layout/SET_LOGGED"
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface ILayoutState {
  readonly transparentClass: string;
  readonly isOpen: boolean;
  readonly isLogged: boolean;
}
