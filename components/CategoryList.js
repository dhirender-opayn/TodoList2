import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { CustomStyles } from "./CustomStyles";
import { TodoList } from "./TodoList";



export const CategoryList = ({ onCategory, onToggle }) => {

    const [newCateItem, setnewCateItem] = useState('');
    let [isActive, setActiveData] = useState([]);
    const [click, setClick] = useState(false);

    const listdata = [{ key: 'Urgent', id: 1, checked: false },
    { key: 'working', id: 2, checked: false },
    { key: 'home', id: 3, checked: false }];




    // const onCatToggle = id => e=>{
    //     setActiveData(
    //              listdata.map(todo => 
    //                 todo.id == id ?{...todo,checked: !todo.checked} : todo

    //              )
    //          )
    //    };

    const getCategoryname = text => {

            listdata.map(itemdata => {
                if (itemdata.key == text) {
                    setClick(true)
                } else {
                    setClick(false)
                }
            }
        )

        setnewCateItem(text);
        onCategory(text);
        setnewCateItem('');


        // setClick(

        //     listdata.map(todlist=>
        //        { if(todlist.id == id){
        //                 console.warn(todlist.id  + " ------  " + id)

        //             alert('matched')
        //         } else {

        //             console.warn(todlist.id  + " ------  " + id)
        //             alert('hat')
        //         }}
        //             // todlist ==id ? alert('matched'):alert('hat')
        //     )
        // )
    }





    return (

        <View style={CustomStyles.inputContainer} >


            <FlatList
                horizontal
                data={listdata}
                renderItem={({ item }) =>

                    <TouchableOpacity onPress={() => getCategoryname(item.key)} >
                        {


                            //    <Text style={CustomStyles.selectedcategoryitems}> {item.key} </Text> 
                            click ? (

                                <Text style={CustomStyles.selectedcategoryitems} >{item.key}</Text>

                            ) : (
                                <Text style={CustomStyles.categoryitems} >{item.key}</Text>
                            )
                        }


                    </TouchableOpacity>
                }
            />

        </View>
    );

}