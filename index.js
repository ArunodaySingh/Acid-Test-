import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Header from './Components/Header/header';
import Card from "./Components/Cards/cards";
import Calculate from "./Components/Calculate/calculate";
import Acid from "./Components/ImageComponent/image";
import Test from "./Components/TestComponent/test";
import Todo from "./Components/TodoComponent/index";

export default function index() {

    let [state, changestate] = React.useState(0);
    function cardsclick(index) {

        changestate(index);

    }

    function backclick() {

        changestate(false);

    }

    let takecomponent = <Card clicked={cardsclick} />

    if (state == 1) {
        takecomponent = <Calculate backfunction={backclick} />
    }
    if (state == 2) {
        takecomponent = <Acid backfunction={backclick} />
    }
    if (state == 3) {
        takecomponent = <Test backfunction={backclick} />
    }
    if (state == 4) {
        takecomponent = <Todo backfunction={backclick} />
    }



    return (
        <View style={styles.container}>
            <Header />
            <ImageBackground style={styles.backgroundimageset} source={require('./Image/1.jpg')}>
                {takecomponent}
            </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundimageset:
    {
        flex: 1
    }
});
