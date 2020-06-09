import React from 'react';
import { Drink } from 'types';
import { DrinkName, ItemContainer, DrinkImage } from './DrinkListItemStyled';

type DrinkListItemProps = Omit<Drink, 'id'>;

export const DrinkListItem: React.FC<DrinkListItemProps> = ({ name, img }) => {
  return (
    <ItemContainer>
      <DrinkImage source={{ uri: img }} />
      <DrinkName>{name}</DrinkName>
    </ItemContainer>
  );
};
