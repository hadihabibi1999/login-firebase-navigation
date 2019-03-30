import React, { Component } from "react";
import { TouchableOpacity,Text, Button ,View, TextInput,  KeyboardAvoidingView ,StatusBar,StyleSheet} from "react-native";
import fire from "./firebase";
 

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
        }
    }

    loginUser(){
        console.log(this.state)
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
        })
          // ...
    }
  
     goesToHome(){
        {this.props.navigate.navigate('Home')}
      }
  
   
      arrivalledUser(){
          this.loginUser()
          this.goesToHome()
      }

      
render() {
   
    return (
        <View behavior='padding' style={{ flex: 1, flexDirection: "column", margin: 10 }}> 
        
        <StatusBar
            barStyle="light-content"
        />
         
            <TextInput
                style={styles.input1}
                placeholder="username"
                underlineColorAndroid="transparent"
                placeholderTextColor='#ED0D66'
                returnKeyType='next'
                onSubmitEditing={()=>this.passwordTextInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.email}
                onChangeText={(email)=> this.setState({email})}
            />
      
     
           <View style={{ paddingTop:33}}>
            <TextInput
                style={styles.input2}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                placeholderTextColor='#ED0D66'
                returnKeyType='go'
                ref={(input)=>this.passwordTextInput=input}
                value={this.state.password}
                onChangeText={(password)=> this.setState({password})}
            />
                 </View>

                 <TouchableOpacity style={{ height: 100, marginTop: 90 }}
                      onPress={()=>this.arrivalledUser()}>
                      <Text style={{textAlign:'center',color:'#FEFDFD',fontSize:25}}>Log In</Text>
                 </TouchableOpacity>
     
                
        </View>
      
    );
  }
}
const styles = StyleSheet.create({
   input1:{
       height: 45,
       borderColor: "#D11A63",
       borderWidth: 0.5,
       paddingHorizontal:10,
       borderRadius:30,
       backgroundColor:"#FCF6F9"
   },
    input2:{
        height: 45,
        borderColor: "#F37703",
        borderWidth: 0.5,
        paddingHorizontal:10,
        borderRadius:30,
        backgroundColor:"#FCF6F9"
    }
})

