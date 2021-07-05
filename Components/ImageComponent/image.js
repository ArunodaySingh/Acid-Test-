import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


function Acid(props) {


    return (
        <View>
            <View style={Style.imgcontainer}>
                <View>

                    <TouchableOpacity onPress={() => console.log("click")} >

                    </TouchableOpacity>
                </View>
                <View>

                    <TouchableOpacity onPress={() => console.log("click")} >

                    </TouchableOpacity>
                </View>
                <View>

                    <TouchableOpacity onPress={() => console.log("click")} >


                    </TouchableOpacity>
                </View>
                <View>

                    <TouchableOpacity onPress={() => console.log("click")} >


                    </TouchableOpacity>
                </View>
                <View>

                    <TouchableOpacity onPress={() => console.log("click")} >


                    </TouchableOpacity>
                </View>
                <View>

                    <TouchableOpacity onPress={() => console.log("click")} >


                    </TouchableOpacity>
                </View>

            </View>
            <View style={Style.btnmain1}>
                <TouchableOpacity onPress={props.backfunction} style={Style.btnmain2}>
                    <Text style={Style.btn}>Cancel</Text>

                </TouchableOpacity>
            </View>

        </View>

    )

}


const Style = StyleSheet.create(

    {
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
        imgcontainer:
        {
            flex: 1,
            borderWidth: 3,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap"
        }

    })

export default Acid;