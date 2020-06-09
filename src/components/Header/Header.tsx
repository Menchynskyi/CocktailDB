import React from 'react';
import { StackHeaderProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import { BackIcon } from 'components/BackIcon';
import { FilterIcon } from '../FilterIcon';
import {
  HeaderContainer,
  Title,
  TitleContainer,
  BackButton,
  FilterButton,
} from './HeaderStyled';

type HeaderProps = StackHeaderProps;

export const Header: React.FC<HeaderProps> = ({
  scene,
  previous,
  navigation,
}) => {
  const handleNavigate = () => {
    navigation.navigate('Filters');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <HeaderContainer>
        <TitleContainer>
          {previous && (
            <BackButton onPress={handleGoBack}>
              <BackIcon />
            </BackButton>
          )}
          <Title>{scene.route.name}</Title>
          {!previous && (
            <FilterButton onPress={handleNavigate}>
              <FilterIcon />
            </FilterButton>
          )}
        </TitleContainer>
      </HeaderContainer>
    </SafeAreaView>
  );
};
