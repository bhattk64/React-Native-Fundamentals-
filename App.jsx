import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'

const App = () => {
 const [text,setText]= useState('')
 const[submitted,setSubmitted]= useState('')
 const handleSubmit=()=> {
  setSubmitted(text)
  setText('')
 }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App</Text>
      <TextInput
      placeholder='Enter your name'
      style={styles.input}
      value={text}
      onChangeText={setText}
      multiline
      numberOfLines={1}
       />
       <Button title='Submit' onPress={(handleSubmit)}/>
       {submitted ? <Text>Result : {submitted}</Text> : <Text>Result :</Text>}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    gap: 20
    
  },
  title:{
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',

  },
  input:{
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1

  }
})
