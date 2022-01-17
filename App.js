import React,{useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TextInputBase, View} from 'react-native';
import { CustomStyles } from './components/CustomStyles';
import { TodoInsert } from './components/TodoInsert';
import { TodoList } from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
 
  const addTodo = text => {
    setTodos([
       ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const onRemove = id => e=>{
    setTodos(todos.filter(todo=>todo.id != id));
  };

  return (
    <SafeAreaView style={CustomStyles.container}>
      <Text style={CustomStyles.appTitle}>Todo List</Text>
      <View style = {CustomStyles.card}>
          <TodoInsert onAddTodo={addTodo}/>
        <TodoList todos={todos} onRemove ={onRemove} />
      </View>
    </SafeAreaView>
  );
};

 

export default App;