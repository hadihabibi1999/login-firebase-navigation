
import React ,{ Component } from 'react';
import {StyleSheet,TouchableHighlight  ,Text, View ,ScrollView, Text ,Image} from 'react-native';
import {Icon} from 'native-base';


export default class Main extends Component {

    goToHome () {
     this.props.navigation.navigate('Home')
   }

          static navigationOptions = {
        headerLeft:
        <Text style={{padding:10}}
        onPress={()=>this.goToHome}>
        <Icon 
         style={{padding:10}}
         name="ios-camera"
         />
         </Text>,
         title:'Instagram',
         headerRight: 
         <TouchableHighlight>
         <Icon 
         style={{padding:10}}
         name="ios-send"
         />
         </TouchableHighlight>
      }
      
    render() { 
        return ( 
            <Text onPress={this.goToHome}>hi</Text>
         );
    }


}
