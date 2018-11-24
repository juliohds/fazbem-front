import { action } from "typesafe-actions";
import { LayoutActionTypes } from "./types";

export const setTransparentClass = (transparentClass: string) => action(LayoutActionTypes.SET_TRANSPARENTCLASS, transparentClass);
export const setIsOpen = (isOpen: boolean) => action(LayoutActionTypes.SET_ISOPEN, isOpen);
export const setLogged = (isLogged: boolean) => action(LayoutActionTypes.SET_LOGGED, isLogged);