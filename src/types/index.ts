export type Drink = {
  id: string;
  name: string;
  img: string;
};

export type Filter = {
  name: string;
  isSelected: boolean;
};

export type FilterApi = {
  [key: string]: any;
};

export type DrinkApi = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

export type DrinkData = { title: string; data: Drink[] };

export type DrinkList = Array<DrinkData>;
