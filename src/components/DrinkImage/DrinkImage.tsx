import React, { useState } from 'react';
import { ImageStyled, ImageContainer } from './DrinkImageStyled';

type DrinkImageProps = {
  url: string;
};

export const DrinkImage: React.FC<DrinkImageProps> = ({ url }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <ImageContainer>
      <ImageStyled
        isLoaded={isLoaded}
        onLoad={handleLoaded}
        source={{ uri: url }}
      />
    </ImageContainer>
  );
};
