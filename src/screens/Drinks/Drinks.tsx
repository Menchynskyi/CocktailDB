import React from 'react';
import { View, Text } from 'react-native';
import { useFetchDrinks } from 'hooks/useFetchDrinks';

export const Drinks: React.FC = () => {
  const { drinkList, loading, error } = useFetchDrinks();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error</Text>;

  return <View />;
};
