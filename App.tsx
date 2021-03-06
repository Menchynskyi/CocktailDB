import React from 'react';
import { useFonts } from '@use-expo/font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Theme } from 'theme';
import { Drinks, Filters } from 'screens';
import { Header, Loader } from 'components';
import { DrinksProvider } from 'contexts';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [fontIsLoaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontIsLoaded) {
    return <Loader />;
  }

  return (
    <Theme>
      <DrinksProvider>
        <NavigationContainer>
          <Stack.Navigator headerMode="screen">
            <Stack.Screen
              name="Drinks"
              component={Drinks}
              options={{ header: Header }}
            />
            <Stack.Screen
              name="Filters"
              component={Filters}
              options={{ header: Header }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </DrinksProvider>
    </Theme>
  );
};

export default App;
