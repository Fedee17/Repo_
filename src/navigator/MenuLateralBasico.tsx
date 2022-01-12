import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerScreenProps,
} from '@react-navigation/drawer';

import {ClientesScreen} from '../screens/Clientes/ClientesScreen';
import {HojasdeRutaScreen} from '../screens/Hojas de Ruta/HojasdeRutaScreen';
import {PagosScreen} from '../screens/Pagos/PagosScreen';
import {PedidosScreen} from '../screens/Pedidos/PedidosScreen';
import {ProductosScreen} from '../screens/Productos/ProductosScreen';
import {SincronizarScreen} from '../screens/Sincronizar/SincronizarScreen';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {colores, styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {LogoFidel} from '../components/LogoFidel';
import {CrearNuevoClienteScreen} from '../screens/Pedidos/CrearNuevoClienteScreen';
import {SeleccionarClienteScreen} from '../screens/Pedidos/SeleccionarClienteScreen';
import {SeleccionarClientePagosScreen} from '../screens/Pagos/SeleccionarClientePagosScreen ';
import {FacturasPendientesScreen} from '../screens/Pagos/FacturasPendientesScreen';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <MenuInterno {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 340,
        },
      }}>
      {/* <Drawer.Screen name="StackNavigator" options={{ title: 'StackNavigator', drawerIcon: (props) => <Text> T1 </Text> }} component={StackNavigator} /> */}
      <Drawer.Screen
        name="Clientes"
        options={{title: 'Clientes'}}
        component={ClientesScreen}
      />
      <Drawer.Screen
        name="Productos"
        options={{title: 'Productos'}}
        component={ProductosScreen}
      />
      <Drawer.Screen
        name="Hojas_de_Ruta"
        options={{title: 'Hojas de Ruta'}}
        component={HojasdeRutaScreen}
      />
      <Drawer.Screen
        name="Pedidos"
        options={{title: 'Pedidos'}}
        component={PedidosScreen}
      />
      <Drawer.Screen
        name="Pagos"
        options={{title: 'Pagos'}}
        component={PagosScreen}
      />
      <Drawer.Screen
        name="Sincronizar"
        options={{title: 'Sincronizar'}}
        component={SincronizarScreen}
      />
      <Drawer.Screen
        name="CrearNuevoClienteScreen"
        options={{title: ''}}
        component={CrearNuevoClienteScreen}
      />
      <Drawer.Screen
        name="SeleccionarClienteScreen"
        options={{title: ''}}
        component={SeleccionarClienteScreen}
      />
      <Drawer.Screen
        name="SeleccionarClientePagosScreen"
        options={{title: ''}}
        component={SeleccionarClientePagosScreen}
      />
      <Drawer.Screen
        name="FacturasPendientesScreen"
        options={{title: 'Facturas Pendientes'}}
        component={FacturasPendientesScreen}
      />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del Logo */}
      <View style={stylesScreen.avatarContainer}>
        <LogoFidel />
        <Text style={stylesScreen.avatarContainerText}>Bienvenido Usuario</Text>
      </View>

      {/* Parte del Avatar */}
      <View style={stylesScreen.menuContainer}>
        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('Clientes')}>
          <Icon name="people" size={30} color={colores.primary} />
          <Text style={styles.menuTexto}> Clientes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('Productos')}>
          <Icon name="basket" size={30} color={colores.primary} />
          <Text style={styles.menuTexto}> Productos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('Hojas_de_Ruta')}>
          <Icon name="map" size={30} color={colores.primary} />
          <Text style={styles.menuTexto}> Hojas de Ruta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('Pedidos')}>
          <Icon name="reader" size={30} color={colores.primary} />
          <Text style={styles.menuTexto}> Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('Pagos')}>
          <Icon name="card" size={30} color={colores.primary} />
          <Text style={styles.menuTexto}> Pagos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('Sincronizar')}>
          <Icon name="reload-circle" size={30} color={colores.primary} />
          <Text style={styles.menuTexto}> Sincronizar</Text>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 50,
            marginBottom: 10,
            alignItems: 'center',
          }}>
          <Text>Versión: 4.0.0</Text>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
          }}></View>

        {/* Cerrar Sesión - Botón*/}
        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row',
            top: 10,
          }}
          onPress={() => navigation.navigate('Sincronizar')}>
          <Icon name="exit" size={30} color={colores.primary} />
          <Text style={styles.menuTexto}> Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const stylesScreen = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    marginTop: -5,
    backgroundColor: '#459D39',
    // paddingVertical: 60,
    height: 200,
    justifyContent: 'center',
  },

  avatarContainerText: {
    position: 'absolute',
    color: 'white',
    top: 165,
  },

  menuContainer: {
    marginTop: 20,
    marginHorizontal: 25,
  },
});
