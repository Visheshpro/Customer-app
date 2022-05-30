import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

export default class Profile extends React.Component{

  render(){
    console.log(this.props)
    console.log(this.props.route.params.food.previewImage)
    return(
      <View>
            <Text style={{alignSelf:"center",fontSize:25,fontWeight:600,marginBottom:10,color:'#272d2f'}}>Ingredients Screen</Text>
      <View style={{backgroundColor:'white',width:"80%", alignSelf:'center',borderRadius:20, display:"flex",flexDirection:'column',alignItems:'center',shadowOffset:{width:8,height:4},shadowColor:'#a7a8a7',shadowOpacity:0.3}}>
      <Image source={{uri:this.props.route.params.food.previewImage}} style={{width:150,height:150,alignSelf:'center',borderRadius:30,marginTop:10}} />
      <Text style={{marginTop:5, fontSize:30,fontWeight:500}}>{this.props.route.params.food.foodName}</Text>
      <Text style={{marginTop:10,color:'grey'}}>Ingredients:  {this.props.route.params.food.ingredients}</Text>
      <View style={{display:"flex",flexDirection:'row',alignItems:"flex-end"}}>
      <Text style={{fontSize:20,fontWeight:400,marginBottom:9}}>₹</Text>
      <Text style={{fontSize:40,marginTop:10,fontWeight:300}}>{this.props.route.params.food.price}</Text>
      </View>
      </View>
      </View>
    )
  }
}
