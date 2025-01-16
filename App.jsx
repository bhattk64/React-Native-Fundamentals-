import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'

const dummy=[
    {id:1,name:'kulchandra',email:'kul123',image:'data:image/jpeg;base64,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'},
   
    {id:2,name:'kulchandra',email:'kul123',image:'data:image/jpeg;base64,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'},
    {id:3,name:'kulchandra',email:'kul123',image:'data:image/jpeg;base64,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'},
    {id:4,name:'kulchandra',email:'kul123',image:'data:image/jpeg;base64,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'},


]
const App = () => {
  return (
    <View style={styles.container}>
        <FlatList 
        data={dummy}
        renderItem={({item}) => (  
        <View style={styles.card}>
            <Image 
            style={{width:100, height: 100, borderRadius: 50}}
            source={{uri:'data:image/jpeg;base64,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'}}  />
           
            <Text >Title</Text>
            <Text >Description</Text>
           
    
    
          </View>) }
          keyExtractor={item => item.id}
          ItemSeparatorComponent={<View  style={{height: 10}}/>}
          numColumns={1}
         // columnWrapperStyle={{justifyContent: 'space-between'}}
         //extraData={refresh}
        
        />
    
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    height:'100%',
    width:'100%',
    paddingVertical:10,
    paddingHorizontal:20

  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 10,
    width: '90%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
})