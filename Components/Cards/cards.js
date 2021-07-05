import React from 'react';
import { Text, View, Linking, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from 'react-native-elements';


const image = { uri: 'https://i.pinimg.com/originals/66/52/ac/6652ac608969d57a2d0c7f476c71b825.png' };
const index = 1;

const card = (props) => {
    return (
        <View style={Style.maincontainer}>
            <View>
                <TouchableOpacity onPress={() => props.clicked(index)}>
                    <Card.Image containerStyle={{ width: 150, height: 150, margin: 15, borderRadius: 100, }} source={image}>
                        <View style={Style.containerStyle}>
                            <Text style={Style.CardText}>Acid Calculator</Text>
                        </View>
                    </Card.Image>
                </TouchableOpacity>

            </View>
            <View>
                <TouchableOpacity onPress={() => props.clicked(index + 1)}>
                    <Card.Image containerStyle={{ width: 150, height: 150, margin: 15, borderRadius: 100, }} source={image}>
                        <View style={Style.containerStyle}>
                            <Text style={Style.CardText}>Photos</Text>
                        </View>
                    </Card.Image>
                </TouchableOpacity>

            </View>
            <View>
                <TouchableOpacity onPress={() => props.clicked(index + 2)}>
                    <Card.Image containerStyle={{ width: 150, height: 150, margin: 15, borderRadius: 100, }} source={image}>
                        <View style={Style.containerStyle}>
                            <Text style={Style.CardText}>Test</Text>
                        </View>
                    </Card.Image>
                </TouchableOpacity>

            </View>
            <View>
                <TouchableOpacity onPress={() => props.clicked(index + 3)}>
                    <Card.Image containerStyle={{ width: 150, height: 150, margin: 15, borderRadius: 100, }} source={image}>
                        <View style={Style.containerStyle}>
                            <Text style={Style.CardText}>Todo </Text>
                        </View>
                    </Card.Image>
                </TouchableOpacity>

            </View>
            <View>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/watch?v=5cqCvcX7buo')} >
                    <Card.Image containerStyle={{ width: 150, height: 150, margin: 15, borderRadius: 100, }} source={image}>
                        <View style={Style.containerStyle}>
                            <Text style={Style.CardText}>Videos</Text>
                        </View>
                    </Card.Image>
                </TouchableOpacity>

            </View>
            <View>
                <TouchableOpacity onPress={() => Linking.openURL('http://itunes.apple.com/app/id123123')}>
                    <Card.Image containerStyle={{ width: 150, height: 150, margin: 15, borderRadius: 100, }} source={image}>
                        <View style={Style.containerStyle}>
                            <Text style={Style.CardText}>Share</Text>
                        </View>
                    </Card.Image>
                </TouchableOpacity>

            </View>
            <View>
                <TouchableOpacity onPress={() => Linking.openURL('itms-apps://itunes.apple.com/us/app/id12312313?action=write-review&mt=8')}>
                    <Card.Image containerStyle={{ width: 150, height: 150, margin: 15, borderRadius: 100, }} source={image}>
                        <View style={Style.containerStyle}>
                            <Text style={Style.CardText}>Rate Us</Text>
                        </View>
                    </Card.Image>
                </TouchableOpacity>

            </View>
            <View>
                <TouchableOpacity onPress={() => Linking.openURL('itms-apps://itunes.apple.com/us/app/id12312313?action=write-review&mt=8')}>
                    <Card.Image containerStyle={{ width: 150, height: 150, margin: 15, borderRadius: 100, }} source={image}>
                        <View style={Style.containerStyle}>
                            <Text style={Style.CardText}>Review</Text>
                        </View>
                    </Card.Image>
                </TouchableOpacity>

            </View>




        </View>
    )

}
//shadow doesn't work in android so for that we need to use elevation 
const Style = StyleSheet.create({
    CardText: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        color: "black"
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center'

    },
    maincontainer: {


        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",

    },


});

export default card;