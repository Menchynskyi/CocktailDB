import React from 'react';
import { Text, SectionList } from 'react-native';
import { useFetchDrinks } from 'hooks/useFetchDrinks';
import { DrinkListItem } from 'components';
import { getDrinks } from 'api';
import { useDrinksDispatch } from 'contexts';
import { DrinksContainer, SectionTitle } from './DrinksStyled';

export const Drinks: React.FC = () => {
  const { filterList, drinkList, loading, error } = useFetchDrinks();
  const dispatch = useDrinksDispatch();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error</Text>;

  const handleEndReached = () => {
    getDrinks(dispatch, filterList, drinkList.length);
  };

  return (
    <DrinksContainer>
      <SectionList
        sections={drinkList}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { name, img } }) => (
          <DrinkListItem name={name} img={img} />
        )}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
    </DrinksContainer>
  );
};
