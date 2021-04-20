import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {  StyleSheet,
        Text,
        View,
        FlatList,
        TouchableWithoutFeedback,
        Keyboard,
        Alert } from 'react-native';

import Header from './conponents/Header'
import TodoItems from "./conponents/TodoItems"
import AddTodos from './conponents/AddTodos'


export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);

  const onSubmitHandler = (text) =>{
      if(text.length > 3){
        setTodos((prevTodos) =>{
          return[
            { text: text, key: Math.random().toString()},
            ...prevTodos
          ]
        })
      }else if(text === ""){
        Alert.alert('OOPS!', 'Field can not be empty', [
          {text: 'Ok', onPress:()=> console.log("Alert Closed") }
        ])
      }else{
        Alert.alert('OOPS!', 'Text must be 3 Char long..', [
          {text: 'OK', onPress:()=> console.log("Alert Closed")}
        ])
        
      }
    
    
    Keyboard.dismiss();
  }

  const removeItem = (key) =>{
      const newItem = todos.filter(todo => todo.key != key);
      setTodos(newItem)
  }
  
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log("dismmissed Keyboard");
    }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodos   onSubmitHandler={ onSubmitHandler} />
        <View style={styles.list}>
          <FlatList 
          data={todos}
          renderItem={({ item })=>(
          <TodoItems item={item} removeItem={removeItem} />
           
          )}
          />
        </View>
      </View>

    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex: 1,
    padding: 40,
  },
  list:{
    marginTop: 20,
    flex: 1,
  } 
  
});
