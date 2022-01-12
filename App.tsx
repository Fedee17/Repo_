import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {MenuLateralBasico} from './src/navigator/MenuLateralBasico';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MenuLateralBasico />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
