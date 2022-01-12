import {Dimensions, StyleSheet} from 'react-native';

export const colores = {
  primary: '#459D39',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },

  title: {
    fontSize: 24,
  },

  avatar: {
    width: 270,
    height: 50,
  },

  menuContainer: {
    marginTop: 20,
    marginHorizontal: 25,
    backgroundColor: 'red',
  },

  textoVersion: {
    fontSize: 16,
  },

  menuBoton: {
    marginVertical: 5,
  },

  menuTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#459D39',
  },

  // Estilos Clientes
  ClientesTitle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },

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
    color: '#459D39',
  },

  containerButton: {
    marginTop: 60,
  },

  buttonCliente: {
    backgroundColor: '#f0f0ed',
    borderRadius: 15,
    height: 30,
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

  facturasText: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 10,
  },

  // Estilos Productos
  ProductosTitle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  ProductosTextBackground: {
    width: 160,
    backgroundColor: '#f0f0ed',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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

  ProductosTextInput: {
    flex: 1,
    fontSize: 13,
  },

  // Estilos Sincronizar
  SincronizarContainers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  SincronizarBoton: {
    borderRadius: 10,
    backgroundColor: '#459D39',
    marginVertical: 15,
    height: '8%',
    width: '85%',
    //Sombras
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  SincronizarTexto: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
  },

  bottonCliente: {
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginTop: 40,
    marginHorizontal: 80,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#459D39',
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
