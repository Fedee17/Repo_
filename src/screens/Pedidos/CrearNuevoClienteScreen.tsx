import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ClienteRequest} from '../../models';
import {
  getDBConnection,
  crearCliente,
  createTable,
} from '../../services/Cliente.service';
import {styles} from '../../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const CrearNuevoClienteScreen = ({navigation}: Props) => {
  const [data, setData] = useState<ClienteRequest>({
    nombre: '',
    razon: '',
    cuit: '',
  });

  // AGREGA UN ITEM A LA LISTA
  const addTodo = async () => {
    try {
      const db = await getDBConnection();
      await createTable(db);
      await crearCliente(db, data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    navigation.setOptions({
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
          <Text style={styles.ClientesTitle}>Crear Nuevo Cliente</Text>
        </View>

        <View style={theme.ClientesTextBackground}>
          <TextInput
            label="Nombre"
            underlineColor="#459D39"
            activeUnderlineColor="#459D39"
            style={{
              ...styles.ClientesTextInput,
              top: Platform.OS === 'ios' ? 0 : 2,
            }}
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={value => setData({...data, razon: value})}
          />
        </View>

        <View style={theme.ClientesTextBackground}>
          <TextInput
            label="Razón Social"
            underlineColor="#459D39"
            activeUnderlineColor="#459D39"
            style={{
              ...styles.ClientesTextInput,
              top: Platform.OS === 'ios' ? 0 : 2,
            }}
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={value => setData({...data, razon: value})}
          />
        </View>

        <View style={theme.ClientesTextBackground}>
          <TextInput
            label="CUIT"
            underlineColor="#459D39"
            activeUnderlineColor="#459D39"
            style={{
              ...styles.ClientesTextInput,
              top: Platform.OS === 'ios' ? 0 : 2,
            }}
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={value => setData({...data, razon: value})}
          />
        </View>

        <TouchableOpacity style={styles.bottonCliente} onPress={addTodo}>
          <Text
            style={{color: 'white', textAlign: 'center', alignItems: 'center'}}>
            Agregar Cliente
          </Text>
        </TouchableOpacity>

        {/* <HeaderTitle title={JSON.stringify(newTodo, null, 3)} /> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const theme = StyleSheet.create({
  ClientesTextBackground: {
    // backgroundColor: '#f0f0ed',
    // borderRadius: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
  },
});
