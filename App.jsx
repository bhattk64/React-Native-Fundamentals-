import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

const App = () => {
  const theme=  useColorScheme()
  const isDarkMode=theme==='dark' 
  const backgroundColor=isDarkMode?'#000':'#fff'
  const textcolor=isDarkMode?'#fff':'#000'

  return (
    <View style={[styles.container,{backgroundColor:backgroundColor}]}>
      <Text style={[styles.text,{color:textcolor}]}>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text:{
        fontSize: 30,
        color: '#000',

    }
})