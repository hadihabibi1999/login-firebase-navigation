import React, { Component } from "react";
 import { TouchableOpacity,Text,ImageBackground , View, Button, TextInput, KeyboardAvoidingView ,StatusBar,StyleSheet} from "react-native";
 import fire from "./firebase";

export default class Signup extends Component {
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
    }

    createUser(){
      console.log("salam,",this.state)
       fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(()=>console.log("user Signed in")).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(error.message,"error")
        });
  }
    navigation(){
      this.props.navigation.navigate('Login')
  }
  loginbutton(){
      this.createUser()
      this.navigation()
  }

render() {
    return (
        <KeyboardAvoidingView behavior="padding" enabled>
    
        <View behavior='padding' style={{ flex: 1, flexDirection: "column",padding:20}}>
        <StatusBar
            barStyle="light-content"
        />

      <View style={{marginTop:50}}>
            <TextInput
                style={styles.input1}
                placeholder="Email address"
                underlineColorAndroid="transparent"
                placeholderTextColor='white'
                returnKeyType='next'
                onSubmitEditing={()=>this.passwordTextInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.email}
                onChangeText={(email)=> this.setState({email})}
            />
       
     
            <View style={{ paddingTop:20}}>
            <TextInput
                style={styles.input2}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                placeholderTextColor='white'
                returnKeyType='go'
                ref={(input)=>this.passwordTextInput=input}
                value={this.state.password}
                onChangeText={(password)=> this.setState({password})}
            />
                 </View>
                 </View>

            <View style={{ height: 100, marginTop: 200 }}>
                <TouchableOpacity onPress={()=>this.loginbutton()}>
                    <Text style={{textAlign:'center',color:'steelblue',fontSize:25}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
       
       </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
   input1:{
       height: 45,
       borderColor: "#0B52F6",
       borderWidth: 0.5,
       paddingHorizontal:10,
       borderRadius:30,
       backgroundColor:"#8D8E92"
   },
    input2:{
        height: 45,
        borderColor: "#0B52F6",
        borderWidth: 0.5,
        paddingHorizontal:10,
        borderRadius:30,
        backgroundColor:"#8D8E92"
    }
})