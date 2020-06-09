import axios from 'axios';
import { Action } from 'contexts';
import { Filter, FilterApi, DrinkApi, Drink } from 'types';

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

export const getDrinksByType = async (filterName: string) => {
  try {
    const { data } = await axios.get(`${apiUrl}/filter.php?c=${filterName}`);
    const drinks = data.drinks.map(
      ({ idDrink, strDrink, strDrinkThumb }: DrinkApi) => ({
        id: idDrink,
        name: strDrink,
        img: strDrinkThumb,
      })
    ) as Drink[];
    return {
      title: filterName,
      data: drinks.slice(0, 8),
    };
  } catch (e) {
    throw new Error(e);
  }
};

export const getDrinks = async (
  dispatch: React.Dispatch<Action>,
  filterList: Filter[],
  id: number
) => {
  try {
    const selectedFilters = filterList.filter(({ isSelected }) => isSelected);
    if (id < selectedFilters.length) {
      const data = await getDrinksByType(
        selectedFilters[id === 0 ? 0 : id].name
      );
      dispatch({ type: 'getDrinks', payload: data });
    }
  } catch (e) {
    throw new Error(e);
  }
};
