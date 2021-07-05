import React, { useState } from 'react';
import { Button, View, TextInput, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {

  const [arraylist, updatearrylist] = useState([]);


  function pressButton(enterTitle) {
    updatearrylist([
      ...arraylist, {
        uid: Math.random().toString(),
        newitem: enterTitle
      }
    ]);
  }

  const [enterGoal, setEnteredGoal] = useState();
  function Click(value) {
    setEnteredGoal(value);
  }
  /**instead of arrow function i can use javascript vanilla bind function props.onentervalue.bind(this,enterGoal)**/
  return (<View >

    <View style={{ paddingVertical: 10, }} >
      <Button title="Add new Goal" color="green" onPress={props.changemodal}></Button>
    </View>
    <View  >
      <Button title="Cancel" color="red" onPress={props.backclick}></Button>

    </View>

    <Modal style={{ zIndex: 1 }} animationType='slide' visible={props.nowmodal}>

      <View style={style.viewinput}>
        <TextInput placeholderTextColor="black" style={style.textinput} placeholder="New Note" onChangeText={Click} value={enterGoal} />
      </View>
      <View style={style.btn}>
        <View style={style.btn1}>
          <Button title="Add " color="green" onPress={() => props.onentervalue(enterGoal)} />
        </View>
        <Button title="Cancel" color="red" onPress={props.back} />

      </View>

    </Modal>

  </View>)
}

const style = StyleSheet.create({

  textinput: {

    borderColor: "grey",
    borderWidth: 2,
    width: '100%',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    height: "10%",
    borderRadius: 25,
    backgroundColor: "#d5e4e6"


  },
  viewinput: {
    flex: 1,
    marginTop: "1%",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,


  },
  btn: {
    margin: 35,
    height: "10%",


  },
  btn1: {
    marginBottom: 10,

  }


})

export default GoalInput;
