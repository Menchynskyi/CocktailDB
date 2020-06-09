import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { useFonts } from '@use-expo/font';
import { Theme } from './src/theme';

const App: React.FC = () => {
  const [fontIsLoaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontIsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Theme>
      <SafeAreaView>
        <Text>CoctailDB</Text>
      </SafeAreaView>
    </Theme>
  );
};

export default App;
