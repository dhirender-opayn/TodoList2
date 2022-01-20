//TodoInsert component is the one for TextInput and Add button which we are going to use to add todo items.

import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { CustomStyles } from "./CustomStyles";
import React, { useState } from "react";
import { CategoryList } from "./CategoryList";
 
export const TodoInsert = ({ onAddTodo, onParentSelectCategory }) => {
    const [newTodoItem, setNewTodoItem] = useState('');
    const todoInputHandler = newTodo => 
    {
        setNewTodoItem(newTodo);
    };
    const addButtonTodo = () =>
    {
        if(newTodoItem.length>0)
        {
            onAddTodo(newTodoItem);
            setNewTodoItem('');
        }else
        {
            alert("enter msg")
        }
    }
    return (
        <View style={{flexDirection:'column'}}>
            <View style={CustomStyles.inputContainer} >
                <TextInput
                    style={CustomStyles.input}
                    placeholder="Add Todo"
                    value={newTodoItem}
                    autoCorrect={false}
                    multiline={true}
                    maxLength={100}
                    onChangeText={todoInputHandler}
                    placeholderTextColor={'#999'}
                />
                <TouchableOpacity  style={CustomStyles.appButtonContainer}  onPress={addButtonTodo}>
                    <Text style={CustomStyles.appButtonText}> Add</Text>
                </TouchableOpacity>
            </View>
            <CategoryList onParentSelectCategory = {onParentSelectCategory}  />
        </View>
    );
}