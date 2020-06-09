import React from 'react';
import { Text, SectionList } from 'react-native';
import { useFetchDrinks } from 'hooks/useFetchDrinks';
import { DrinkListItem } from 'components';
import { DrinksContainer, SectionTitle } from './DrinksStyled';

export const Drinks: React.FC = () => {
  const { drinkList, loading, error } = useFetchDrinks();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error</Text>;

  return (
    <DrinksContainer>
      <SectionList
        sections={drinkList}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { name, img } }) => (
          <DrinkListItem name={name} img={img} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
    </DrinksContainer>
  );
};
