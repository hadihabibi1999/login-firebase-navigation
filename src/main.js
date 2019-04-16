
import React ,{ Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity, 
    View,
    ScrollView, 
    Text,
    Image
} from 'react-native';
import { Icon } from 'native-base';



export default class Main extends Component {

    goToHome = () => {
     this.props.navigation.navigate('Home')
   }

   static navigationOptions = ({ navigation }) => ({ 
       title: 'Instagram',
       headerRight: <Icon style = {{ padding: 10 }} name = "ios-send" />,
       headerLeft:  <TouchableHighlight onPress = {() => navigation.navigate('Home')} >
                        <Icon style = {{ padding: 10 }} name = "ios-camera" />
                    </TouchableHighlight>,
    });

    render() { 
        return ( 
            <Text onPress={this.goToHome}>hi</Text>
         );
    }
}
