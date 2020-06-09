import styled from 'styled-components/native';

export const FilterContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding-top: 10px;
  padding-bottom: 150px;
`;

export const ApplyButton = styled.TouchableOpacity`
  position: absolute;
  align-self: center;
  bottom: 80px;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const ApplyTitle = styled.Text`
  text-align: center;
  padding: 17px;
  color: ${({ theme }) => theme.colors.background.primary};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.text.regular};
`;
