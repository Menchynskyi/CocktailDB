import React from 'react';
import { View } from 'react-native';
import Svg, { G, Path, Defs, Rect, ClipPath } from 'react-native-svg';

export const FilterIcon: React.FC = () => {
  return (
    <View>
      <Svg width="29" height="29" viewBox="0 0 29 29" fill="none">
        <G clipPath="url(#clip0)">
          <Path
            d="M27.7849 0H1.21512C0.816939 0 0.563549 0.434383 0.816939 0.796369L10.5544 14.4432C10.9887 15.0224 11.2421 15.7826 11.2421 16.5427V28.4521C11.2783 28.8503 11.6041 29.1037 11.9299 28.9589L17.4683 26.8593C17.6493 26.8231 17.7579 26.606 17.7579 26.425V16.5427C17.7579 15.7826 18.0113 15.0586 18.4456 14.4432L28.1831 0.796369C28.4365 0.434383 28.1831 0 27.7849 0Z"
            fill="black"
          />
        </G>
        <Defs>
          <ClipPath id="clip0">
            <Rect width="29" height="29" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};
