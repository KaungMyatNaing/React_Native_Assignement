
import { Text, View, StyleSheet,FlatList,Image } from 'react-native';
import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react';



export default function UserList() {
  const fakeData = [
    {
      id: 1,
      firstname: 'Yagoo',
      email: 'Tonadro@gmai.com',
      avater: 'https://i.imgur.com/Miiz7ov.png'
    },
    {
      id: 2,
      firstname: 'Yagoo',
      email: 'Tonadro@gmai.com',
      avater: 'https://i.imgur.com/rRmL2ii.png'
    },
    {
      id: 3,
      firstname: 'Yagoo',
      email: 'Tonadro@gmai.com',
      avater: 'https://i.imgur.com/k17Uq2M.png'
    },
    {
      id: 4,
      firstname: 'Yagoo',
      email: 'Tonadro@gmai.com',
      avater: 'https://i.imgur.com/yd71Jh8.png'
    }
  ]
  const [users,setUsers] = useState([])
  
//Fetch data not working
  const getData = async()=>{
    try{
      const fetchdata = await fetch('https://reqres.in/api/users')
      const toJson = await fetchdata.json()
      setUsers(toJson)
      console.log(users)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    getData();
   },[]);

  const Card = (props) => {
    return (
      <View style={{flex:1, flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderWidth: 1,borderRadius: 15,marginBottom: 10,backgroundColor:'gray'}}>
        <Image style={{ width: 50, height: 50, borderRadius: 20 }} source={{uri : props.imgurl}} />
      <View style={{padding: 5}}>
        <Text style={{marginBottom:5}}>{props.name}</Text>
        <Text>{props.email}</Text>
      </View>
    </View>
    )
    
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={fakeData}
        renderItem={({item}) =>
          <View>
            <Card name={item.first_name} email={item.email} imgurl={item.avater} />
          </View>}
        keyExtractor={item => item.id}
      />
      
    
    </View>
    


  );

  
}

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
