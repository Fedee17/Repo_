import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {ToDoItem} from '../models';

export const ToDoItemComponent: React.FC<{
  todo: ToDoItem;
  deleteItem: Function;
}> = ({todo: {id, value}, deleteItem}) => {
  return (
    <View style={styles.todoContainer}>
      <View style={styles.todoTextContainer}>
        <Text style={styles.sectionTitle}>{value}</Text>
      </View>
      <Button
        onPress={() => deleteItem(id)}
        title="Borrar"
        color="#841584"
        accessibilityLabel="add todo item"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    marginTop: 10,
    paddingHorizontal: 24,
    backgroundColor: '#f0f0ed',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  todoTextContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '400',
  },
});
