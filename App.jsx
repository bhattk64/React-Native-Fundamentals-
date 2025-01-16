import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    < ScrollView 
    contentContainerStyle={{gap:10}}
    horizontal
    
    style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10,

       
    },
    box1: {
        flex:1,
        width: 80,
        height: 80,
        backgroundColor: 'red',
        borderRadius: 50


    },
    box2:{
        flex:1,
        width: 80,
        height: 80,
        backgroundColor: 'green',
        borderRadius: 50
    },
    box3:{
        flex:1,
        width: 80,
        height: 80,
        backgroundColor: 'blue',
        borderRadius: 50
    }
})
