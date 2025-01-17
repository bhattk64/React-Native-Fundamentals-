import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Profile = ({navigation,route}) => {
    const {id,name} = route.params
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center',width:"100%",height:"100%" }}>
      <Text style={{ fontSize: 30 ,fontWeight:"bold",color:"red"}}>Profile</Text>
      <Text style={{ fontSize: 30 ,fontWeight:"bold",color:"red"}}>id:{id}</Text>
      <Text style={{ fontSize: 30 ,fontWeight:"bold",color:"red"}}>Name:{name}</Text>
      <Button title="Go to Search" onPress={() => navigation.navigate('Search')} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})