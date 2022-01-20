//TodoList component will be using ScrollView to show todo items.

import { ScrollView, Text, View } from "react-native";
import { CustomStyles } from "./CustomStyles";
import React, { useState } from "react";
import { TodoListitem } from "./TodoListitem";

export const TodoList = ({ todos, onRemove, onToggle }) => {
    const [getvalue, setvalue] = useState([])
    return (
        <ScrollView contentContainerStyle={CustomStyles.listContainer}>
            {
                todos.map(todo => {
                    return <TodoListitem key={todo.id}    {...todo} onRemove={onRemove} onToggle={onToggle} />
                }
                )
            }

        </ScrollView>
    );
};