import styled from 'styled-components/native';

export const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
  padding: 0 35px;
`;

export const FilterName = styled.Text`
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.text.regular};
`;
