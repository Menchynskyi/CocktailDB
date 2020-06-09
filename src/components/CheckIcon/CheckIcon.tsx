import React from 'react';
import Svg, { G, Path, Defs, Rect, ClipPath } from 'react-native-svg';
import { View } from 'react-native';

export const CheckIcon: React.FC = () => {
  return (
    <View>
      <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
        <G clipPath="url(#clip0)">
          <Path
            d="M24.6339 3.68633C24.1458 3.19814 23.3544 3.19814 22.8661 3.68633L7.89035 18.6623L2.13391 12.9058C1.64578 12.4176 0.85437 12.4177 0.366138 12.9058C-0.122046 13.3939 -0.122046 14.1854 0.366138 14.6735L7.00647 21.3138C7.49446 21.8019 8.28645 21.8016 8.77424 21.3138L24.6339 5.4541C25.1221 4.96597 25.122 4.17451 24.6339 3.68633Z"
            fill="black"
          />
        </G>
        <Defs>
          <ClipPath id="clip0">
            <Rect width="25" height="25" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};
