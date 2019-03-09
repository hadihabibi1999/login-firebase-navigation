import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {StyleSheet,Button, View, Text ,Image,ImageBackground,KeyboardAvoidingView} from 'react-native';
import Signup from './src/signup';
import LoginForm from './src/login';
import Home from './src/home';

 class Login extends React.Component {
  static navigationOptions = {
    header: null,
    };



    facebook(){
      var provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('user_birthday');
      firebase.auth().languageCode = 'fr_FR';
      provider.setCustomParameters({
        'display': 'popup'
      });
    }
   
  render() {
    return (
          <KeyboardAvoidingView behavior="padding" enabled>
               <ImageBackground source={require('./assets/instagram-background.jpg')} style={{width: '100%', height: '100%'}}>  

                      <View style={{marginTop:100,alignItems:'center'}}>
                      <Image  style={{width: 185, height: 100}}
                      source={require('./assets/logo-Instagram.png')} 
                      />
                      </View>

                        <View style={{marginTop:80}}>
                           <LoginForm/>
                        </View>


                    
                          <View style={{marginTop:300}}>
                                   <Text style={{color:'#F50665',textAlign:'center',fontSize:15}}>Don't have an account? </Text> 
                          
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
