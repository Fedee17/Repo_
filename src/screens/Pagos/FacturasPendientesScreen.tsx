import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../../theme/appTheme';
import prompt from 'react-native-prompt-android';

interface Props extends DrawerScreenProps<any, any> {}

export const FacturasPendientesScreen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{marginRight: 10}}
            onPress={() => navigation.navigate('FacturasPendientesScreen', {})}>
            <Icon name="refresh" color="white" size={25} />
          </TouchableOpacity>
        </View>
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

  const insets = useSafeAreaInsets();

  const showAlert = () => {
    prompt(
      'Ingrese Valor del Pago',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'numeric',
        cancelable: false,
        placeholder: '$0.00',
      },
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          marginTop: insets.top + 20,
          ...styles.globalMargin,
          borderBottomWidth: 1,
        }}>
        <Text style={styles.facturasText}>GROSSO TRACTORES S.A</Text>
      </View>

      <View style={{marginTop: 370}}>
        <View
          style={{
            ...stles.FacturasTextBackground,
            backgroundColor: '#459D39',
          }}>
          <View
            style={{
              ...styles.ClientesTextInput,
              top: Platform.OS === 'ios' ? 0 : 2,
              flexDirection: 'row',
            }}>
            <Text style={stles.FacturasText}>Saldo Total</Text>
            <Text
              style={{
                ...stles.FacturasText,
                marginLeft: 170,
              }}>
              $ 576.872
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={stles.FacturasTextBackground}
          onPress={showAlert}>
          <Text style={stles.FacturasText}>AGREGAR PAGO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const stles = StyleSheet.create({
  FacturasTextBackground: {
    backgroundColor: '#c51829',
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  FacturasText: {
    color: 'white',
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
