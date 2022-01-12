import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {
  Button,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const SeleccionarClienteScreen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{marginRight: 10}}
            onPress={() => navigation.navigate('CrearNuevoClienteScreen', {})}>
            <Icon name="add-circle" color="white" size={25} />
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

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="menu" onPress={() => navigation.toggleDrawer} />
      ),
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          <Text style={styles.ClientesTitle}>Seleccionar Cliente</Text>
        </View>

        <View style={stylesScreen.ClientesTextBackground}>
          <TextInput
            placeholder="Nombre del Cliente"
            style={{
              ...stylesScreen.ClientesTextInput,
              top: Platform.OS === 'ios' ? 0 : 2,
            }}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Icon name="search-circle" color="grey" size={30} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const stylesScreen = StyleSheet.create({
  //  ... ... ... ...
  ClientesTextBackground: {
    backgroundColor: '#f0f0ed',
    borderRadius: 50,
    height: 60,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    marginBottom: 30,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  ClientesTextInput: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
