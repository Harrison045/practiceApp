import {View, Text, StyleSheet, Image, Button} from "react-native"
import profileImg from "./assets/profile.png"
function Profile() {
  return <View style={style.container}>
    <Image source={profileImg} style={style.image}/>
    <View style={style.detailsContainer}>
      <Text style={style.label}>School</Text>
      <Text style={style.info}>Codetrain Africa</Text>
    </View>
    <View style={style.detailsContainer}>
      <Text style={style.label}>School</Text>
      <Text style={style.info}>Codetrain Africa</Text>
    </View>

    <View style={style.infoDetails}>
      <Text style={style.infoLabel}>Name</Text>
      <Text style={style.infoName}>Harrison Prince</Text>
    </View>
    <View style={style.infoDetails}>
      <Text style={style.infoLabel}>Nick Name</Text>
      <Text style={style.infoName}>Me</Text>
    </View>
    <View style={style.infoDetails}>
      <Text style={style.infoLabel}>Emergency Number</Text>
      <Text style={style.infoName}>+233(0) 592 309 059</Text>
    </View>
    <View style={style.button}>
      <Button title="Update Profile" />
    </View>
    

  </View>
  
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:5,
  },
  image:{
    marginTop:100,
    width: 150,
    height: 150,
    marginBottom: 30,
    alignSelf:"center",
    borderRadius:75
  },
  detailsContainer:{
    marginLeft: 30,
    marginVertical: 10
  },
  label:{
    fontSize:12,
    color: "grey"
  },
  info:{
    fontSize: 20
  },
  infoDetails:{
    marginLeft: 30,
    marginRight: 30,
    marginVertical: 10
  },
  infoLabel:{
    color:"blue"
  },
  infoName:{
    fontSize: 20,
    borderBottomColor: "grey",
    paddingVertical: 5,
    borderBottomWidth: 1
  },
  button:{
    marginTop:50,
    borderRadius: 30
  }
})

export default Profile