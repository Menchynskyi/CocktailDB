import React from 'react';
import { useFetchFilters } from 'hooks';
import { Text } from 'react-native';
import { FilterContainer } from './FilterStyled';

export const Filters: React.FC = () => {
  const { filterList, loading, error } = useFetchFilters();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error</Text>;

  return <FilterContainer />;
};
