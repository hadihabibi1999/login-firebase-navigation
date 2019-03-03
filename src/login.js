import React, { Component } from "react";
 import { TouchableOpacity,Text, View, Button, TextInput, KeyboardAvoidingView ,StatusBar,StyleSheet} from "react-native";
 import fire from "./firebase";

export default class LoginForm extends Component {
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
    }
    loginUser(){
          console.log(this.state)
           fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error.message,"error")
          });
        }
    navigation(){
        this.props.navigation.navigate('Home')
    }

    arrivaledUser(){
        this.loginUser()
        this.navigation()
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
      
     
            <View style={{ paddingTop:35}}>
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

            <View style={{ height: 100, marginTop: 90 }}>
                <TouchableOpacity onPress={()=>this.arrivaledUser()}>
                    <Text style={{textAlign:'center',color:'steelblue',fontSize:25}}>Log In</Text>
                </TouchableOpacity>
            </View>
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