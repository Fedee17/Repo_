import {DrawerScreenProps} from '@react-navigation/drawer';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const SincronizarScreen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#459D39',
      },
      headerTitleStyle: {
        color: 'white',
      },

      headerTintColor: 'white',

      headerLeft: () => (
        <TouchableOpacity
          style={stylesScreen.buttonIconMenu}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" color="white" size={30} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.SincronizarContainers}>
      <TouchableOpacity
        style={styles.SincronizarBoton}
        // onPress={ () => navigation.navigate('Clientes') }
      >
        <Text style={styles.SincronizarTexto}> OBTENER DATOS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.SincronizarBoton}
        // onPress={ () => navigation.navigate('Clientes') }
      >
        <Text style={styles.SincronizarTexto}> OBTENER SALDO DE CLIENTES</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.SincronizarBoton}
        // onPress={ () => navigation.navigate('Clientes') }
      >
        <Text style={styles.SincronizarTexto}> ENVIAR DATOS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          ...styles.SincronizarBoton,
          backgroundColor: '#c51829',
        }}
        // onPress={ () => navigation.navigate('Clientes') }
      >
        <Text style={styles.SincronizarTexto}> ELIMINAR DATOS</Text>
      </TouchableOpacity>
    </View>
  );
};
const stylesScreen = StyleSheet.create({
  buttonIconMenu: {
    marginLeft: 10,
  },
});
