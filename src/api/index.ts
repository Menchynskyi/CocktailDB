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
      data: drinks.slice(0, 5),
    };
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchDrinks = async (
  dispatch: React.Dispatch<Action>,
  filterList: Filter[]
) => {
  try {
    const data = await Promise.all(
      filterList
        .filter(({ isSelected }) => isSelected)
        .map(({ name }) => getDrinksByType(name))
    );
    dispatch({ type: 'fetchDrinks', payload: data });
  } catch (e) {
    throw new Error(e);
  }
};
