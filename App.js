import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, Keyboard, TouchableWithoutFeedback, Text } from 'react-native';
// components 
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const todosArray = [
    {title: 'Read React Native Docs', isCompleted: false, id: '1'},
    {title: 'Merge Joes work', isCompleted: false, id: '2'},
    {title: 'Check update on hwfar group', isCompleted: false, id: '3'},
    {title: 'Buy some food stuff from the grocery', isCompleted: false, id: '4'},
    {title: 'Walk the dog', isCompleted: false, id: '5'},
    {title: 'Do a 30 minutes workout today', isCompleted: false, id: '6'},
    {title: 'Search for sample weather design UI', isCompleted: false, id: '7'},
    {title: 'Buy UV safety glass', isCompleted: false, id: '8'},
  ];

  const [todos, setTodos] = useState(todosArray);
  const [completed, setCompleted] = useState(0);

  const pressHandler = (id) => {
    setTodos((prevTodos) => {
      let indx;
      const item = prevTodos.find((todo, idx) => {
        indx = idx;
        return todo.id === id
      });
      item.isCompleted = !item.isCompleted;
      prevTodos[indx] = item;
      const completedTodos = prevTodos.filter(todo => todo.isCompleted === true);
      setCompleted(completedTodos.length);
      return [...prevTodos];
    });
  }

  const submitHandler = (todo) => {
    if(todo.length > 3){
      setTodos((prevTodos) => {
        return [
          {title: todo, isCompleted: false, id: Math.random().toString()},
          ...prevTodos
        ]
      })
    }else {
      Alert.alert('Oops!', 'Todo Must not be less than 4 chars long', [
        {text: 'ok', onPress: () => console.log('alert closed')}
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* Add todo input */}
          <AddTodo submitHandler={submitHandler} />

          <View style={styles.stats}>
            <Text style={styles.statsText}>You completed {completed} out of {todos.length} task(s)</Text>
          </View>
          {/* Todos */}
          <View style={styles.list}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    padding: 20
  },
  list: {
    flex: 1,
    marginTop: 10
  },
  stats: {
    marginVertical: 20
  },
  statsText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
