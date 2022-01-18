import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TextInputBase, View } from 'react-native';
import { CategoryList } from './components/CategoryList';
import { CustomStyles } from './components/CustomStyles';
import { TodoInsert } from './components/TodoInsert';
import { TodoList } from './components/TodoList';
 

const App = () => {

 
  const [todos, setTodos] = useState([]);
  const [cattodo,setCattodo] = useState([]);
  
  const addTodo = (text) => {
    alert(cattodo)
    setTodos([
      ...todos,
      { id: Math.random().toString(), textValue: text ,cat:cattodo,checked: false  },
    ]);
  };
 
  const onRemove = id => e => {
   
    setTodos(todos.filter(todo => todo.id != id));
  };

  const onToggle = id => e=>{
    setTodos(
      todos.map(todo => 
            todo.id == id ?{...todo,checked: !todo.checked} : todo
        )
    )
  };

  const onCategory = text =>  {
         
        setCattodo(text)
  
  };
 
  return (
  
    <SafeAreaView style={CustomStyles.container}>
      <Text style={CustomStyles.appTitle}>Todo List</Text>
      <View style={CustomStyles.card}>
        <TodoInsert onAddTodo={addTodo}  onCategory={onCategory}  onToggle={onToggle} />
       
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
};



export default App;