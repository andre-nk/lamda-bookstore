"use client";
import { createContext, useContext, useState } from "react";

/**
 * A place to store stateful data that is shared across the app.
 */

const AppContext = createContext({
  sidebarVisible: false,
  setSidebarVisible: (visible: boolean) => {},
});

export const useApp = () => {
  return useContext(AppContext);
};

interface Props {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <AppContext.Provider value={{ sidebarVisible, setSidebarVisible }}>
      {children}
    </AppContext.Provider>
  );
};
