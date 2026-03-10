"use client";
import { TamaguiProvider as BaseTamaguiProvider, type TamaguiProviderProps } from "tamagui";
import config from "./tamagui.config";

export const TamaguiProvider = ({ children, ...props }: Omit<TamaguiProviderProps, 'config'>) => {
  return (
    <BaseTamaguiProvider config={config} {...props}>
      {children}
    </BaseTamaguiProvider>
  );
};
