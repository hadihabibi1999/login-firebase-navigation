import React ,{ Component } from 'react';
import {StyleSheet,TouchableHighlight  ,Button, View ,ScrollView, Text ,Image} from 'react-native';
import {Icon} from 'native-base';

export default class Main extends Component {
    static navigationOptions = {
        headerLeft:
        <TouchableHighlight onPress={()=>{this.props.navigation.navigate('Home')}}>
         <Icon 
         style={{padding:10}}
         name="ios-camera"
         />
         </TouchableHighlight>,
         title:'Instagram',
         headerRight: 
         <TouchableHighlight onPress={()=>{this.props.navigation.navigate('Home')}}>
         <Icon 
         style={{padding:10}}
         name="ios-send"
         />
         </TouchableHighlight>
      }
    render() { 
        return ( 
            
         <View>
            
         </View>

         );
    }
}
 
