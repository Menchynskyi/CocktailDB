import styled from 'styled-components/native';

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  padding: 0 20px;
`;

export const DrinkName = styled.Text`
  flex: 1;
  flex-wrap: wrap;
  margin-left: 20px;
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.text.regular};
`;
