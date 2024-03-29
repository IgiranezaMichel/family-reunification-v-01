/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { UpliftingContextType } from "./type";

export const UpliftingContext = createContext<UpliftingContextType | undefined>(undefined);
export const useUpliftingMessage = (): UpliftingContextType => {
    const context = useContext(UpliftingContext);
    if (!context) {
      throw new Error('useUpliftingMessage must be used within a UpliftingProvider');
    }
    return context;
  };