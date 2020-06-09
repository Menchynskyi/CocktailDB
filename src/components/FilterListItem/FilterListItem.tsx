import React from 'react';
import { Filter } from 'types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ItemContainer, FilterName } from './FilterListItemStyled';
import { CheckIcon } from '../CheckIcon';

type FilterListItemProps = Filter & { onPress: () => void };

export const FilterListItem: React.FC<FilterListItemProps> = ({
  name,
  isSelected,
  onPress: handlePress,
}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <ItemContainer>
        <FilterName>{name}</FilterName>
        {isSelected && <CheckIcon />}
      </ItemContainer>
    </TouchableOpacity>
  );
};
