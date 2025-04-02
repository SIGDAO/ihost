"use client";

import { createContext, useState } from "react";

export const Context = createContext({
  streamPromise: undefined,
  setStreamPromise: () => {},
});

export default function Providers({ children }) {
  const [streamPromise, setStreamPromise] = useState();

  return (
    <Context.Provider value={{ streamPromise, setStreamPromise }}>
      {children}
    </Context.Provider>
  );
}