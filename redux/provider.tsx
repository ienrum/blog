"use client";
import { Provider } from "react-redux";

import store from "../redux/store";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return <Provider store={store}>{children}</Provider>;
}
