import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center',width:"100%",height:"100%" }}>
      <Text style={{ fontSize: 30 ,fontWeight:"bold",color:"red"}}>Home</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile',{id:1,name:"Rahul"})} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})