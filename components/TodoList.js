//TodoList component will be using ScrollView to show todo items.

import { ScrollView, Text, View } from "react-native";
import { CustomStyles } from "./CustomStyles";
import React, { useState } from "react";
import { TodoListitem } from "./TodoListitem";

export const TodoList= ({todos,onRemove,onToggle }) => {
    const [getvalue, setvalue]  = useState([])
    return(
        <ScrollView contentContainerStyle = {CustomStyles.listContainer}>
            {
                todos.map(todo=> 
                  {     
                      let currentTodoList =   <TodoListitem key={todo.id}  categoryObj = {todo.categoryObj} {...todo} onRemove={onRemove} onToggle={onToggle}/>
                    if (todo.categoryObj.key.match("Urgent")) {
                               
                        currentTodoList=   <TodoListitem key={todo.id}   categoryObj = {todo.categoryObj} {...todo} onRemove={onRemove} onToggle={onToggle}/>
                    }
                        return currentTodoList
                    }
                )
            }
 
        </ScrollView>
    );
};