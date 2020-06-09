import { useEffect } from 'react';
import { fetchFilters } from 'api';
import { useDrinksDispatch, useDrinksState } from 'contexts';

export const useFetchFilters = () => {
  const dispatch = useDrinksDispatch();
  const { filterList, error } = useDrinksState();

  useEffect(() => {
    fetchFilters(dispatch);
  }, []);

  return {
    filterList,
    loading: filterList.length === 0,
    error,
  };
};
