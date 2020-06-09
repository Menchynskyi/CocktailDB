import React, { createContext, useReducer, useContext } from 'react';
import { Drink, Filter } from 'types';

type State = {
  drinkList: Drink[];
  filterList: Filter[];
};

export type Action = {
  type: 'fetchFilters';
  payload: Filter[];
};

export type DrinksContextState = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type DrinksProviderProps = { children: React.ReactNode };

export const initialState: State = {
  drinkList: [],
  filterList: [],
};

const drinksReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'fetchFilters': {
      return {
        ...state,
        filterList: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const DrinksContext = createContext<DrinksContextState | undefined>(
  undefined
);

export const DrinksProvider: React.FC<DrinksProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(drinksReducer, initialState);
  return (
    <DrinksContext.Provider value={{ state, dispatch }}>
      {children}
    </DrinksContext.Provider>
  );
};

export const useDrinksContext = (): DrinksContextState => {
  const context = useContext(DrinksContext);
  if (context === undefined) {
    throw new Error('useDrinksContext must be used within a DrinksProvider');
  }
  return context;
};

export const useDrinksState = (): State => {
  const context = useContext(DrinksContext);
  if (context === undefined) {
    throw new Error('useDrinksState must be used within a DrinksProvider');
  }
  return context.state;
};

export const useDrinksDispatch = (): React.Dispatch<Action> => {
  const context = useContext(DrinksContext);
  if (context === undefined) {
    throw new Error('useDrinksDispatch must be used within a DrinksProvider');
  }
  return context.dispatch;
};
