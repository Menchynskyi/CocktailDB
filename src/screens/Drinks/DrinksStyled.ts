import styled from 'styled-components/native';

export const DrinksContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding-top: 20px;
`;

export const SectionTitle = styled.Text`
  margin-bottom: 20px;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.text.small};
`;
