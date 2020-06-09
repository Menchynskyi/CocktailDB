import { useEffect } from 'react';
import { fetchDrinks } from 'api';
import { useDrinksDispatch, useDrinksState } from 'contexts';
import { useFetchFilters } from './useFetchFilters';

export const useFetchDrinks = () => {
  const { filterList, loading, error } = useFetchFilters();
  const { drinkList } = useDrinksState();
  const dispatch = useDrinksDispatch();

  useEffect(() => {
    if (!loading) {
      fetchDrinks(dispatch, filterList);
    }
  }, [loading]);

  return {
    drinkList,
    loading: drinkList.length === 0,
    error,
  };
};
