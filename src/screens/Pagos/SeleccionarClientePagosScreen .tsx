import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {
  Button,
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> {}

export const SeleccionarClientePagosScreen = ({navigation}: Props) => {
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

  const insets = useSafeAreaInsets();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={stylesScreen.Container}>
          <View
            style={{
              ...stylesScreen.containerTitle,
              marginTop: insets.top + 20,
            }}>
            <Text style={stylesScreen.ClientesTitle}>Seleccionar Cliente</Text>
          </View>

          <View style={stylesScreen.ClientesTextBackground}>
            <TextInput
              placeholder="Nombre del Cliente"
              style={{
                ...stylesScreen.ClientesTextInput,
                top: Platform.OS === 'ios' ? 0 : -1,
              }}
              autoCapitalize="words"
              autoCorrect={false}
            />

            <Icon name="search-circle" color="grey" size={30} />
          </View>

          <View style={{marginVertical: 20}}></View>

          <View style={stylesScreen.containerButton}>
            <TouchableOpacity
              style={stylesScreen.buttonPago}
              onPress={() => navigation.navigate('FacturasPendientesScreen')}>
              <Text style={stylesScreen.buttonText}>
                PROVEEDURIA Y FIAMBRERIA FEDE
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesScreen.buttonPago}
              onPress={() => navigation.navigate('FacturasPendientesScreen')}>
              <Text style={stylesScreen.buttonText}>REDOLFI S.R.L</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesScreen.buttonPago}
              onPress={() => navigation.navigate('FacturasPendientesScreen')}>
              <Text style={stylesScreen.buttonText}>
                AGROPECUARIA DON ANIBAL S.R.L
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesScreen.buttonPago}
              onPress={() => navigation.navigate('FacturasPendientesScreen')}>
              <Text style={stylesScreen.buttonText}>GROSSO TRACTORES S.A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesScreen.buttonPago}
              onPress={() => navigation.navigate('FacturasPendientesScreen')}>
              <Text style={stylesScreen.buttonText}>GROSSO TRACTORES S.A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesScreen.buttonPago}
              onPress={() => navigation.navigate('FacturasPendientesScreen')}>
              <Text style={stylesScreen.buttonText}>GROSSO TRACTORES S.A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesScreen.buttonPago}
              onPress={() => navigation.navigate('FacturasPendientesScreen')}>
              <Text style={stylesScreen.buttonText}>GROSSO TRACTORES S.A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesScreen.buttonPago}
              onPress={() => navigation.navigate('FacturasPendientesScreen')}>
              <Text style={stylesScreen.buttonText}>GROSSO TRACTORES S.A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesScreen.buttonPago}
              onPress={() => navigation.navigate('FacturasPendientesScreen')}>
              <Text style={stylesScreen.buttonText}>GROSSO TRACTORES S.A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesScreen.buttonPago}
              onPress={() => navigation.navigate('FacturasPendientesScreen')}>
              <Text style={stylesScreen.buttonText}>GROSSO TRACTORES S.A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesScreen.buttonPago}
              onPress={() => navigation.navigate('FacturasPendientesScreen')}>
              <Text style={stylesScreen.buttonText}>GROSSO TRACTORES S.A</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const stylesScreen = StyleSheet.create({
  buttonIconMenu: {
    marginLeft: 10,
  },

  Container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
  },

  //  ... ... ... ...
  containerTitle: {
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },

  ClientesTitle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  //  ... ... ... ...
  ClientesTextBackground: {
    backgroundColor: '#f0f0ed',
    borderRadius: 50,
    height: 40,
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
    paddingVertical: 2,
  },

  //  ... ... ... ...
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonPago: {
    backgroundColor: '#f0f0ed',
    borderRadius: 5,
    height: 33,
    width: '85%',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#5856D6',
    marginBottom: 20,
    // Sombra
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  buttonText: {
    color: 'black',
    fontWeight: '800',
    fontSize: 15,
  },
});
