import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useCallback, useEffect, useState} from 'react';
import {
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
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {ToDoItemComponent} from '../../components/ToDoItem';
import {ToDoItem, ClienteRequest} from '../../models';
import {
  createTable,
  deleteTodoItem,
  getTodoItems,
  saveTodoItems,
} from '../../services/db-service';
import {getDBConnection, obtenerClientes} from '../../services/Cliente.service';

import {styles} from '../../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const ClientesScreen = ({navigation}: Props) => {
  const [todos, setTodos] = useState<ClienteRequest[]>([]);

  //Carga y Muestra los items
  const loadDataCallback = useCallback(async () => {
    try {
      const db = await getDBConnection();
      await createTable(db); //
      const storedTodoItems = await obtenerClientes(db);
      if (storedTodoItems.length) {
        setTodos(storedTodoItems);
      }
      // else {
      //   await saveTodoItems(db, initTodos);
      //   setTodos(initTodos);
      // }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

  // Botón para eliminar un Item
  const deleteItem = async (id: number) => {
    try {
      const db = await getDBConnection();
      await deleteTodoItem(db, id);
      todos.splice(id, 1);
      setTodos(todos.slice(0));
    } catch (error) {
      console.error(error);
    }
  };

  // FIXME: CAMBIAR
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

  useFocusEffect(() => {
    loadDataCallback();
  });

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
            <Text style={stylesScreen.ClientesTitle}>Buscar Clientes</Text>
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
            {todos.map(todo => (
              // <ToDoItemComponent
              //   key={todo.id}
              //   todo={todo}
              //   deleteItem={deleteItem}
              // />
              <Text style={stylesScreen.TextCliente}>{todo.nombre}</Text>
            ))}
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

  // ... ... ...
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

  // ... ... ...
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  TextCliente: {
    color: 'black',
    fontWeight: '800',
    fontSize: 15,
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
});
