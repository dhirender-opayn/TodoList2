import React, { useState } from 'react';
import { SafeAreaView,  Text,   View } from 'react-native';
import { CustomStyles } from './components/CustomStyles';
import { TodoInsert } from './components/TodoInsert';
import { TodoList } from './components/TodoList';


const App = () => {

  const [todos, setTodos] = useState([]);

 

  const [selectedCategory, setSelectedCatgory] = useState('');

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Math.random().toString(), textValue: text, categoryObj: selectedCategory, checked: false },
    ]);
  };


 

  const onRemove = id => e => {

    setTodos(todos.filter(todo => todo.id != id));
  };



  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id == id ? { ...todo, checked: !todo.checked } : todo
      )
    )
  };


  const onChildrenSelectCategory = categoryObject => {
    setSelectedCatgory(categoryObject)
  };

  const getFilteredList = () => {

    let filteredList = []

    todos.map(todo => {
      if (todo.categoryObj.id == selectedCategory.id || selectedCategory.categoryName == 'All') {
        filteredList.push(todo)
      }
    })

    return filteredList
  }

  return (

    <SafeAreaView style={CustomStyles.container}>
      <Text style={CustomStyles.appTitle}>Todo List</Text>
      <View style={CustomStyles.card}>
        <TodoInsert onAddTodo={addTodo} onParentSelectCategory={onChildrenSelectCategory} />
        <TodoList todos={getFilteredList()} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
};



export default App;