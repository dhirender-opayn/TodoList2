//TodoListItem component will have states (completed or not) and events to be checked as completed or to be removed.

import { Image, Text, TouchableOpacity, View } from "react-native";
import { CustomStyles } from "./CustomStyles";
import React from "react";

export const TodoListitem = ({ textValue, id, categoryObj, checked, onRemove, onToggle }) => {
     
    console.log(categoryObj)
    return (
        <View style={CustomStyles.container2}>
 
            <TouchableOpacity onPressOut={onToggle(id)} >
                {
                    checked ? (
                        <View style={CustomStyles.completeCircle}>
                            {/* <Icon name="circledowno" size={30} color="#3143e8"/> */}
                            <Image source={require('./verified.png')} style={CustomStyles.imageAdjustment} />
                        </View>

                    ) : (
                        <View style={CustomStyles.circle} />
                    )
                }
            </TouchableOpacity>

            <Text style={[CustomStyles.text, checked ? CustomStyles.strikeText : CustomStyles.unstrikeText]}>{textValue}</Text>
            <Text>{ categoryObj.categoryName}</Text>
            <TouchableOpacity style={CustomStyles.buttonContainer} onPress={onRemove(id)}>

                <Image source={require('./remove.png')} style={CustomStyles.cancelButtonContainer} />

            </TouchableOpacity>

        </View>

    );
}