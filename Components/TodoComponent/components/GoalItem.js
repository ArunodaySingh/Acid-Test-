import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

/*we can use Touchable components but also we have differnt components like 1.TouchableOpacity you can
also can pass eventlistener like onPress in TouchableOpacity also we have activeOpacity={0.8} which use
to select the opacity when onPress event occured. 2.TouchableHighlight you also can listen onPress event
also its make backgroundColor black when user click on  it but we can also use underlayColor prop to
select the differnt color 3.TouchableNativeFeedback it's only work on android want to learn more about
this go on official docs 4. TouchableWithoutFeedback it's not give any visual effect

*/
const GoalItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => props.deleteItem(props.title.uid)}  >

      <Text style={style.listItems} >
        {props.title.newitem}
      </Text>


    </TouchableOpacity>

  )

}


const style = StyleSheet.create
  (
    {
      listItems: {

        textAlign: 'center',
        padding: 15,
        marginRight: 5,
        marginTop: 5,
        width: '100%',
        borderWidth: 2,
        borderColor: "grey",
        color: "#080808",
        fontSize: 25,
        fontWeight: "bold",
        borderRadius: 25,
        backgroundColor: "#d5e4e6"


      }

    })
export default GoalItem;
