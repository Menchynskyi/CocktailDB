import React from 'react';
import { Text } from 'react-native';
import { useFonts } from '@use-expo/font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Theme } from 'theme';
import { Drinks, Filters } from 'screens';

const Stack = createStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Drinks" component={Drinks} />
          <Stack.Screen name="Filters" component={Filters} />
        </Stack.Navigator>
      </NavigationContainer>
    </Theme>
  );
};

export default App;
