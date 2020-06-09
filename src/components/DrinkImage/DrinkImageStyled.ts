import styled from 'styled-components/native';

type ImageStyledProps = {
  isLoaded: boolean;
};

export const ImageContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.skeleton};
  width: 100px;
  height: 100px;
`;

export const ImageStyled = styled.Image<ImageStyledProps>`
  width: 100px;
  height: 100px;
  opacity: ${({ isLoaded }) => (isLoaded ? '1' : '0')};
`;
