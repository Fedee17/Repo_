import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Alert, Button, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const PedidosScreen = ({navigation}: Props) => {
  const showAlert = () => {
    Alert.alert(
      'Atención',
      '¿Sincronizar Pedidos y Ubicaciones?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'Sí', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
      },
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{marginRight: 10}}
            onPress={showAlert}>
            <Icon name="cloud-upload" color="white" size={25} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={{marginRight: 10}}
            onPress={() => navigation.navigate('SeleccionarClienteScreen', {})}>
            <Icon name="add-circle" color="white" size={25} />
          </TouchableOpacity>
        </View>
      ),

      headerLeft: () => (
        <TouchableOpacity
          style={stylesScreen.buttonIconMenu}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" color="white" size={30} />
        </TouchableOpacity>
      ),

      headerStyle: {
        backgroundColor: '#459D39',
      },
      headerTitleStyle: {
        color: 'white',
      },

      headerTintColor: 'white',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text>PedidosScreen</Text>
    </View>
  );
};

const stylesScreen = StyleSheet.create({
  buttonIconMenu: {
    marginLeft: 10,
  },
});
