import React, { createContext, useReducer, useContext } from 'react';
import { Filter, DrinkList, DrinkData } from 'types';

type State = {
  drinkList: DrinkList;
  filterList: Filter[];
  error: boolean;
};

export type Action =
  | {
      type: 'fetchFilters';
      payload: Filter[];
    }
  | {
      type: 'errorFetching';
    }
  | {
      type: 'setFilters';
      payload: Filter[];
    }
  | { type: 'fetchDrinks'; payload: DrinkList };

export type DrinksContextState = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type DrinksProviderProps = { children: React.ReactNode };

export const initialState: State = {
  drinkList: [],
  filterList: [],
  error: false,
};

const drinksReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'fetchFilters': {
      return {
        ...state,
        filterList: action.payload,
        error: false,
      };
    }
    case 'errorFetching': {
      return {
        ...state,
        error: true,
      };
    }
    case 'setFilters': {
      return {
        ...state,
        filterList: action.payload,
      };
    }
    case 'fetchDrinks': {
      return {
        ...state,
        drinkList: action.payload,
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
