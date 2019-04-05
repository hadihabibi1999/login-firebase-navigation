import React ,{ Component } from 'react';
import {StyleSheet ,Button, View ,ScrollView, Text ,Image} from 'react-native';
import { Icon } from 'react-native-elements'

export default class Gallery extends Component {
    static navigationOptions = {
        headerLeft: <Icon name="ios-camera-outline"/>,
        title:'Instagram',
        headerRight: <Icon name="ios-send-outline"/>
      }
    render() { 
        return ( 
            
         <Text>
             Hi
         </Text>

         );
    }
}
 
