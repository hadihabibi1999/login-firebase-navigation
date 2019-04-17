
import React ,{ Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity, 
    View,
    ScrollView, 
    Text,
    Button,
    Image
} from 'react-native';
import { Icon } from 'native-base';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

 class Main extends Component {
    constructor(){
        super();
             this.state={
             text:'see your information'
         }
       }
   static navigationOptions = ({ navigation }) => ({ 
       title: 'Instagram',
       headerRight: <TouchableHighlight onPress = {() => navigation.navigate('Chat')} >
                        <Icon style = {{ padding: 10 }} name = "ios-send" />
                    </TouchableHighlight>,
       headerLeft:      <Icon style = {{ padding: 10 }} name = "ios-camera" />
              
    });

    render() { 
        return ( 

            <View style={styles.view}>
                   <Text onPress={this.changedText}>{this.state.text}</Text>
            </View>
    );
  }
             changedText=()=>{
                this.setState({text:`${this.state.email}`})
               }
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
         justifyContent: 'center',
          alignItems: 'center' 
    },
})


  export default Main;
  