import styled from 'styled-components/native';

export const ErrorMessageContainer = styled.View`
  margin-top: 200px;
  align-items: center;
`;

export const Message = styled.Text`
  text-align: center;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.fontSize.heading.regular};
`;
