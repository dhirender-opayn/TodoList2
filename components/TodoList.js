//TodoList component will be using ScrollView to show todo items.

import { ScrollView, Text } from "react-native";
import { CustomStyles } from "./CustomStyles";
import React from "react";
import { TodoListitem } from "./TodoListitem";

export const TodoList= ({todos,onRemove}) => {

    return(
        
        <ScrollView contentContainerStyle = {CustomStyles.listContainer}>
            {
                todos.map(todo=>(
                        <TodoListitem key={todo.id} {...todo} onRemove={onRemove}/>
                ))
            }
 
        </ScrollView>
    );
};