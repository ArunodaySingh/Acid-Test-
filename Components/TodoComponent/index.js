import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList, ImageBackground } from 'react-native';
import GoalItem from './components/GoalItem.js'
import GoalInput from './components/GoalInput.js'

export default function Todo(props) {
    const [arraylist, updatearrylist] = useState([]);
    const [modal, setmodal] = useState(false);


    function pressButton(enterTitle) {
        updatearrylist([
            ...arraylist, { uid: Math.random().toString(), newitem: enterTitle }
        ]);
        setmodal(false);
    }
    const deleted = (id) => {
        updatearrylist(arraylist => {
            return arraylist.filter(
                function el(element) {
                    return element.uid !== id
                }

            )
        });
    }


    const image = { uri: 'https://i.pinimg.com/originals/66/52/ac/6652ac608969d57a2d0c7f476c71b825.png' };
    //Instead of FlatList we can use Scrollable but FlatList makes components less loader
    return (

        <View style={style.container}>


            <GoalInput back={() => setmodal(false)} backclick={props.backfunction} changemodal={() => setmodal(true)} nowmodal={modal} onentervalue={pressButton} />
            <FlatList keyExtractor={(item, index) => item.uid} data={arraylist} renderItem={itemData => (
                <GoalItem title={itemData.item} deleteItem={deleted} />
            )} />
        </View>



    );


}


const style = StyleSheet.create({
    container: {
        padding: 10,
    },
    image:
    {
        width: '100%',
        height: '110%',
    },

});
