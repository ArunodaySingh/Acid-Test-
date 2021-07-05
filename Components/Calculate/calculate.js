import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';


function Calculate(props) {

    const [text1, setText1] = React.useState('');
    const [text2, setText2] = React.useState('');
    const [text3, setText3] = React.useState('');
    let [calculatevalue, setcalculatevalue] = React.useState();

    function calculatefunction() {
        if (!text1.trim()) {
            alert('Please Enter PI ');
            return;
        }
        if (!text2.trim()) {
            alert('Please Enter Density');
            return;
        }
        if (!text3.trim()) {
            alert('Please Enter Concentration');
            return;
        }
        calculatevalue = (Number(text1) + Number(text2) + Number(text3));
        setcalculatevalue(calculatevalue);


    }


    return (
        <View style={Style.mainContainer}>
            <View style={Style.textInputConatiner}>
                <TextInput style={Style.textInputConatiner1} label="Acid PI" value={text1} onChangeText={text => setText1(text)} placeholder="Enter PI"></TextInput>
                <TextInput style={Style.textInputConatiner2} label="Acid Density" value={text2} onChangeText={text => setText2(text)} placeholder="Enter Density"></TextInput>
                <TextInput style={Style.textInputConatiner3} label="Acid Concentration" value={text3} onChangeText={text => setText3(text)} placeholder="Enter Concentration"></TextInput>

            </View>
            <View style={Style.btnmain1}>
                <TouchableOpacity onPress={calculatefunction} style={Style.btnmain2}>
                    <Text style={Style.btn}>Calculate</Text>

                </TouchableOpacity>
            </View>
            <View style={Style.btnmain1}>
                <TouchableOpacity onPress={props.backfunction} style={Style.btnmain2}>
                    <Text style={Style.btn}>Cancel</Text>

                </TouchableOpacity>
            </View>
            <View style={Style.outputMain}>
                <Text style={Style.output}>{calculatevalue}</Text>
            </View>

        </View>



    )
}

const Style = StyleSheet.create(

    {
        mainContainer:
        {
            margin: 20,
            marginVertical: "10%",

        },
        textInputConatiner:
        {
            paddingVertical: 10,
            justifyContent: "center",


        },
        textInputConatiner1: {
            paddingVertical: 15,
            borderBottomWidth: 2
        },
        textInputConatiner2: {
            paddingVertical: 15,
            borderBottomWidth: 2
        },
        textInputConatiner3: {
            paddingVertical: 15,
            borderBottomWidth: 2
        },

        btnmain2: {
            height: 50,
            backgroundColor: "#C2B09A",
            flexDirection: 'row',
            textAlign: "center",
            justifyContent: "center",
            borderRadius: 25,
            marginTop: 15
        },
        btn: {
            textAlign: "center",
            paddingVertical: "2%",
            fontSize: 25
        },
        outputMain: {

            marginTop: "15%",
            height: 150,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",

        },
        output:
        {
            color: "black",
            fontSize: 50,
            textAlign: "center"

        }
    }
)

export default Calculate;