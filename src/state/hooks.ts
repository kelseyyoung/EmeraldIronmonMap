import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { EmeraldMapDispatch, EmeraldMapState } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => EmeraldMapDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<EmeraldMapState> =
  useSelector;
