import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  justify-content: center;
  height: 70px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 20px 20px 20px 30px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.fontSize.heading.regular};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const FilterButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 40px;
`;
