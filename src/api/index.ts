import axios from 'axios';
import { Action } from 'contexts';
import { Filter, FilterApi } from 'types';

const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

export const fetchFilters = async (dispatch: React.Dispatch<Action>) => {
  try {
    const { data } = await axios.get(`${apiUrl}/list.php?c=list`);
    const filterList: Filter[] = data.drinks.map((drink: FilterApi) => ({
      name: drink.strCategory,
      isSelected: true,
    }));
    dispatch({ type: 'fetchFilters', payload: filterList });
  } catch (e) {
    dispatch({ type: 'errorFetching' });
    throw new Error(e);
  }
};
