import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { CustomStyles } from "./CustomStyles";
import { TodoListitem } from "./TodoListitem";

export const CategoryList = ({ onParentSelectCategory }) => {

    const [selectedCategory, setSelectedCatgory] = useState(null);
    const listdata = [
        { categoryName: 'All', id: 1, checked: false },
        { categoryName: 'Urgent', id: 2, checked: false },
        { categoryName: 'working', id: 3, checked: false },
        { categoryName: 'home', id: 4, checked: false }
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
                        <Text style={getItemClass(item)} >{item.categoryName}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    );
}