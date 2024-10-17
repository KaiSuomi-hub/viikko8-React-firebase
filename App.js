// App.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { getFirestore } from './config';  // Import Firestore instance from config.js
import TodoItem from './components/todoItem.jsx'
import AddNew from './components/addNew.jsx';
import { getFirestore } from '@react-native-firebase/firestore';

export default function App() {
  const [todos, setTodos] = useState([]);

  // Load todos from Firestore
  const loadTodos = async () => {
    try {
      const todoCollection = await getfirestore.collection('todos').get();
      const loadedTodos = todoCollection.docs.map(doc => ({
        id: doc.id,
        task: doc.data().task,
      }));
      setTodos(loadedTodos);
    } catch (e) {
      console.log('Failed to load todos from Firebase:', e);
    }
  };

  // Add a new todo to Firestore and update the state
  const addTodo = async (newTask) => {
    if (newTask) {
      try {
        const todoRef = await getfirestore.collection('todos').add({ task: newTask });
        setTodos([...todos, { id: todoRef.id, task: newTask }]);
      } catch (e) {
        console.log('Failed to add todo to Firebase:', e);
      }
    }
  };

  // Remove a todo from Firestore and update the state
  const removeTodo = async (id) => {
    try {
      await getfirestore.collection('todos').doc(id).delete();
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (e) {
      console.log('Failed to remove todo from Firebase:', e);
    }
  };

  // Load todos when the app starts
  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <View style={styles.container}>
      <AddNew addTodo={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem task={item.task} onPress={() => removeTodo(item.id)} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
});
