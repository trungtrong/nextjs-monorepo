"use client";
import type { ReactNode } from "react";
import { Provider } from "react-redux";

// eslint-disable-next-line @nx/enforce-module-boundaries
import store from './../../../../libs/shared/store/src/store';

interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
