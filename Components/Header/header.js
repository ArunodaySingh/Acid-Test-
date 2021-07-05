import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const header = function () {
  return (
    <View style={style.Header}>
      <Text style={style.Headertext}>
        Acid Test App
      </Text>
    </View>
  )
}
const style = StyleSheet.create(
  {
    Header:
    {
      backgroundColor: "#C2B09A",
      width: "100%",
      height: 90,
      alignItems: 'center',
      justifyContent: "center"

    },
    Headertext:
    {
      flex: 1,
      color: "black",
      fontWeight: "bold",
      paddingTop: 45,
      fontSize: 25,
    }
  }
)

export default header;
