import { useEffect } from 'react';
import { getDrinks } from 'api';
import { useDrinksDispatch, useDrinksState } from 'contexts';
import { useFetchFilters } from './useFetchFilters';

export const useFetchDrinks = () => {
  const { filterList, loading, error } = useFetchFilters();
  const { drinkList } = useDrinksState();
  const dispatch = useDrinksDispatch();

  useEffect(() => {
    if (!loading) {
      getDrinks(dispatch, filterList, drinkList.length);
    }
  }, [filterList]);

  return {
    filterList,
    drinkList,
    loading: drinkList.length === 0,
    error,
  };
};
