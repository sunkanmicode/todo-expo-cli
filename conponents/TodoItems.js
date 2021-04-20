import React from 'react'
import { Text, StyleSheet, View , TouchableOpacity} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


export default function TodoItems( { item, removeItem }) {
    return (
        <TouchableOpacity>
            <View  style={styles.item}>
                <MaterialIcons
                 name="delete" 
                 size={24} color="black"
                 onPress={() => removeItem(item.key)}
                />
                <Text>{item.text}</Text>
            </View>   
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: "dotted",
        flexDirection: 'row',
    }
})
