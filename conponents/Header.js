import React from 'react'
import {  StyleSheet, Text, View } from 'react-native';


export default function Header()  {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>Title</Text>
            </View>
        )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'black',
        height: 80,
        // marginTop: 20,
        paddingTop: 30,
      
    },
    title:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})
