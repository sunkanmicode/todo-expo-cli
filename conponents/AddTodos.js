import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodos( { onSubmitHandler }) {
    const [ text, setText] = useState("");

    const changeHandle = (val) =>{
        if(val === ""){
            setText("")
        }
         setText(val)   
    }

    return(
        <View>
            <TextInput
            style={styles.input}
                placeholder = "add todo ..."
                onChangeText= {changeHandle}
            />
            <Button  title='Add' color='black' onPress={()=>  onSubmitHandler(text)}/>

        </View>

    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        borderBottomWidth: 1,
    }

})