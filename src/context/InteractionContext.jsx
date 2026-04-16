import React, { createContext, useState, useContext } from "react";

const InteractionContext = createContext();

export const InteractionProvider = ({ children }) => {
  const [interactions, setInteractions] = useState([]);

  const addInteraction = (interactionData) => {
    setInteractions((prev) => [...prev, interactionData]);
  };

  return (
    <InteractionContext.Provider value={{ interactions, addInteraction }}>
      {children}
    </InteractionContext.Provider>
  );
};

// Custom hook shohoje use korar jonno
export const useInteractions = () => useContext(InteractionContext);
