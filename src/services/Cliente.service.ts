import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';
import {ClienteRequest} from '../models';

const tableName = 'clientes';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'todo-data.db', location: 'default'});
};

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
          nombre TEXT NOT NULL
      );`;

  await db.executeSql(query);
};

export const crearCliente = async (
  db: SQLiteDatabase,
  cliente: ClienteRequest,
) => {
  let insertQuery = `INSERT OR REPLACE INTO ${tableName}(Nombre) values`;
  insertQuery += `('${cliente.nombre}')`;

  return db.executeSql(insertQuery);
};

export const obtenerClientes = async (
  db: SQLiteDatabase,
): Promise<ClienteRequest[]> => {
  try {
    const clientes: ClienteRequest[] = [];
    const results = await db.executeSql(`SELECT * FROM ${tableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        clientes.push(result.rows.item(index));
      }
    });
    return clientes;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};
