import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';

export default class Weather extends React.Component {
  readFood = async () => {
    await firebase
      .firestore()
      .collection('food')
      .get()
      .then((resp) => {
        resp.docs.map((memb) =>
          this.setState({ food: [...this.state.food, memb.data()] })
        );
      });
  };

  constructor() {
    super();
    this.state = {
      food: [],
    };
  }

  addCart =async(food)=>{
console.log(food)
   await firebase.firestore().collection('table1').doc(food).set({
      foodName : food
    })
  }

  componentDidMount() {
    this.readFood();
  }

  render() {
    return (
      <View style={{backgroundColor: '#f0f0f0'}}>
        <FlatList
          keyExtractor={(item, index) => {
            index.toString();
          }}
          data={this.state.food}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Ingredients',{food:item});
              }}
              style={{
                alignItems: 'center',
                marginTop: 30,
                borderWidth: 1,
                borderColor:'#f2f2f2',
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                borderRadius: 5,
                width:"95%",
                alignSelf:'center',
                shadowOffset:{width:4,height:6},
shadowColor:"#b8bab9"
              }}>
              <Image
                source={{ uri: item.previewImage }}
                style={{ width: 100, height: 100, borderRadius: 5 }}
              />
              <Text style={{ fontSize: 20, color: '#272d2f' }}>
                {item.foodName}
              </Text>
              <Text style={{ fontSize: 17, color: 'black' }}>
                ₹ {item.price}
              </Text>
              <TouchableOpacity style={{position:"absolute",left:"50%",bottom:"15%",borderWidth:1,backgroundColor:'#ffc520',borderColor:'#ffff99',paddingLeft:5,paddingRight:5,paddingTop:2,paddingBottom:2,borderRadius:4}} onPress={()=>this.addCart(item.foodName)}><Text>Add to Cart</Text></TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
