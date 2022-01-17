//TodoListItem component will have states (completed or not) and events to be checked as completed or to be removed.

import { Image, Text, TouchableOpacity, View } from "react-native";
import { CustomStyles } from "./CustomStyles";
import React from "react";

export const TodoListitem = ({ textValue, id, checked,onRemove }) => {
    return (
        <View style={CustomStyles.container2}>

            <TouchableOpacity>
                <View style={CustomStyles.completeCircle}>
                    {/* <Icon name="circledowno" size={30} color="#3143e8"/> */}
                    <Image source={require('./verified.png')} style={CustomStyles.imageAdjustment} />
                </View>
            </TouchableOpacity>

            <Text style={[CustomStyles.text, CustomStyles.strikeText]}>{textValue}</Text>

            <TouchableOpacity style={CustomStyles.buttonContainer} >
                <Text style={CustomStyles.button} onPress = {onRemove(id)}>
    
                        <Image source={require('./remove.png')} style={CustomStyles.imageAdjustment} />
                    


                </Text>
            </TouchableOpacity>

        </View>

    );
}