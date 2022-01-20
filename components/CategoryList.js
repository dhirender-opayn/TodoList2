import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { CustomStyles } from "./CustomStyles";
import { TodoListitem } from "./TodoListitem";

export const CategoryList = ({ onParentSelectCategory }) => {

    const [selectedCategory, setSelectedCatgory] = useState(null);
    const listdata = [
        { key: 'All', id: 1, checked: false },
        { key: 'Urgent', id: 2, checked: false },
        { key: 'working', id: 3, checked: false },
        { key: 'home', id: 4, checked: false }
    ];
     const onCategoryClickhandler = (catObj) => {
        
        setSelectedCatgory(catObj.id)    
        onParentSelectCategory(catObj)
    }

    const getItemClass = (category) => {

        let currentClass = CustomStyles.categoryitems;
        
        if(selectedCategory && category.id == selectedCategory) {
            currentClass = CustomStyles.selectedcategoryitems
            category.checked = true
        }

        return currentClass
    }

    return (
        <View style={CustomStyles.inputContainer}>
            <FlatList
                horizontal
                data={listdata}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={(event) => onCategoryClickhandler({...item})}>
                        <Text style={getItemClass(item)} >{item.key}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    );
}