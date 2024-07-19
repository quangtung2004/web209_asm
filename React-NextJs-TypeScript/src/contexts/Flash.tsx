import React, { createContext, useState, useContext, ReactNode } from "react";

interface FlashContextType {
  flash: boolean;
  setFlash: React.Dispatch<React.SetStateAction<boolean>>;
}

const flashContext = createContext<FlashContextType | undefined>(undefined);

export const useFlash = (): FlashContextType => {
  const context = useContext(flashContext);
  if (!context) {
    throw new Error("useflash must be used within a flashProvider");
  }
  return context;
};

interface FlashProviderProps {
  children: ReactNode;
}

export const FlashProvider: React.FC<FlashProviderProps> = ({
  children, 
}) => {
  const [flash, setFlash] = useState<boolean>(false);

  return (
    <flashContext.Provider value={{ flash, setFlash }}>
      {children}
    </flashContext.Provider>
  );
};