import React, { useState } from 'react';
import { useFetchFilters } from 'hooks';
import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FilterListItem, Loader } from 'components';
import { useDrinksDispatch } from 'contexts';
import { useNavigation } from '@react-navigation/native';
import { FilterContainer, ApplyButton, ApplyTitle } from './FilterStyled';

export const Filters: React.FC = () => {
  const { filterList, loading, error } = useFetchFilters();
  const [currentFilters, setCurrentFilters] = useState(filterList);

  const dispatch = useDrinksDispatch();
  const navigation = useNavigation();

  if (loading) return <Loader />;
  if (error) return <Text>Error</Text>;

  const handleToggleSelected = (filterName: string) => {
    setCurrentFilters(prev => {
      const filterId = prev.findIndex(({ name }) => filterName === name);
      return prev.map((filter, id) => {
        if (id === filterId) {
          return { ...filter, isSelected: !filter.isSelected };
        }
        return filter;
      });
    });
  };

  const handleApply = () => {
    dispatch({ type: 'setFilters', payload: currentFilters });
    navigation.navigate('Drinks');
  };

  return (
    <FilterContainer>
      <FlatList
        data={currentFilters}
        renderItem={({ item: { name, isSelected } }) => (
          <FilterListItem
            onPress={() => handleToggleSelected(name)}
            name={name}
            isSelected={isSelected}
          />
        )}
        keyExtractor={({ name }) => name}
      />
      <ApplyButton onPress={handleApply}>
        <ApplyTitle>Apply</ApplyTitle>
      </ApplyButton>
    </FilterContainer>
  );
};
