import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {StyleSheet,Button, View, Text ,ImageBackground,KeyboardAvoidingView} from 'react-native';
import { Container, Row, Col } from 'reactstrap';
import Signup from './src/signup';
import LoginForm from './src/login';

 class Login extends React.Component {
  static navigationOptions = {
    header: null,
    };
  render() {
    return (
          <KeyboardAvoidingView behavior="padding" enabled>
               <ImageBackground source={require('./assets/backImage.jpg')} style={{width: '100%', height: '100%'}}>  

                        <View style={{marginTop:300}}>
                           <LoginForm/>
                        </View>


                    
                          <View style={{marginTop:280}}>
                                   <Text style={{color:'gray',textAlign:'center',fontSize:15}}>Don't have an account? </Text> 
                          
                                   <Button
                                         title="Sign Up"
                                         type='clear'
                                         onPress={() => this.props.navigation.navigate('Signup')}
                                   />
                          
                          </View>
                     
               </ImageBackground>
           </KeyboardAvoidingView>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
  },
  {
    initialRouteName: 'Login',
  },
 
);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
