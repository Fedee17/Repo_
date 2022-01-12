import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {
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

export const ProductosScreen = ({navigation}: Props) => {
  const insets = useSafeAreaInsets();

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
          <Text style={styles.ProductosTitle}>Buscar Productos</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              ...styles.ProductosTextBackground,
              marginRight: 10,
            }}>
            <TextInput
              placeholder="Nombre/Código"
              style={{
                ...styles.ProductosTextInput,
                top: Platform.OS === 'ios' ? 0 : 2,
              }}
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Icon name="search-circle" color="grey" size={30} />
          </View>

          <View style={styles.ProductosTextBackground}>
            <TextInput
              placeholder="Efectivo"
              style={{
                ...styles.ProductosTextInput,
                top: Platform.OS === 'ios' ? 0 : 2,
              }}
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Icon name="search-circle" color="grey" size={30} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const stylesScreen = StyleSheet.create({
  buttonIconMenu: {
    marginLeft: 10,
  },
});
