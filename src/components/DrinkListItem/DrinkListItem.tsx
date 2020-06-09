import React from 'react';
import { Drink } from 'types';
import { DrinkName, ItemContainer } from './DrinkListItemStyled';
import { DrinkImage } from '../DrinkImage';

type DrinkListItemProps = Omit<Drink, 'id'>;

export const DrinkListItem: React.FC<DrinkListItemProps> = ({ name, img }) => {
  return (
    <ItemContainer>
      <DrinkImage url={img} />
      <DrinkName>{name}</DrinkName>
    </ItemContainer>
  );
};
