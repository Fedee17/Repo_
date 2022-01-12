import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CrearNuevoClienteScreen} from '../screens/Pedidos/CrearNuevoClienteScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // Para iniciar en una pantalla especifica  initialRouteName=''
      screenOptions={{
        cardStyle: {
          backgroundColor: 'green',
        },

        headerShown: false,

        headerTitleStyle: {
          fontSize: 20,
          marginLeft: 95,
        },

        headerStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="CrearNuevoClienteScreen"
        options={{title: 'Crear Nuevo Cliente'}}
        component={CrearNuevoClienteScreen}
      />
    </Stack.Navigator>
  );
};
