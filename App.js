import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {StyleSheet,Button, View, Text ,Image,ImageBackground,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import Signup from './src/signup';
import LoginForm from './src/login';
import Home from './src/home';
import Main from './src/main';


 class Login extends React.Component {
  static navigationOptions = {
    header: null,
    };



  render() {
    let navigate = ()=>{this.props.navigation};
    return (
          <KeyboardAvoidingView behavior="padding" enabled>
               <ImageBackground source={require('./assets/instagram-background.jpg')} style={{width: '100%', height: '100%'}}>  

                      <View style={{marginTop:100,alignItems:'center'}}>
                      <Image  style={{width: 185, height: 100}}
                      source={require('./assets/logo-Instagram.png')} 
                      />
                      </View>

                        <View style={{marginTop:110}}>
                            <LoginForm
                           navigate={this.props.navigation}
                           />
                        </View>
   
                    
                          <View style={{marginTop:400}}>
                                   <Text style={{color:'#922B21',textAlign:'center',fontSize:15}}>Don't have an account? </Text> 
                          
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
    Home:{
      screen: Home,
    },
    Main:{
      screen: Main,
    }
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
