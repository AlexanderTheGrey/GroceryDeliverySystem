import React, { createContext, useContext, useReducer } from "react";

// Create data layer
export const StateContext = createContext();

// Wrap App in data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Use information in the data layer
export const useStateValue = () => useContext(StateContext);
