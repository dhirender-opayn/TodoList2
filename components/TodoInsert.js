//TodoInsert component is the one for TextInput and Add button which we are going to use to add todo items.

import { Button, TextInput, View } from "react-native";
import { CustomStyles } from "./CustomStyles";
import React,{useState} from "react";
 


export const TodoInsert = ({onAddTodo}) => {

    const [newTodoItem,setNewTodoItem] = useState('');
    const todoInputHandler = newTodo =>{
        setNewTodoItem(newTodo);
    };
    const addTodoHandler=()=>{
        onAddTodo(newTodoItem);
        setNewTodoItem('');
    }


    return (
        <View style={CustomStyles.inputContainer} >
            <TextInput 
                style={CustomStyles.input} 
                placeholder="Add Todo"
                value={newTodoItem}
                autoCorrect = {false}
                onChangeText={todoInputHandler}
                placeholderTextColor={'#999'}
            />
            <View style = {CustomStyles.button}>
                <Button title={'Add'} onPress={addTodoHandler}/>
            </View>
        </View>
    );
}