import React from 'react';
import { ActivityIndicator } from 'react-native';
import { LoaderContainer } from './LoaderStyled';

export const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <ActivityIndicator size="large" />
    </LoaderContainer>
  );
};
