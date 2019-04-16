import React, { Component } from "react";
 import { TouchableOpacity,Text,ImageBackground , View, Button, TextInput, KeyboardAvoidingView ,StatusBar,StyleSheet} from "react-native";
 import fire from "./firebase";
 

export default class Signup extends Component {
    static navigationOptions = {
        header:null
      }
    
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            name:"",
            lastname:""
        }
    }
    

    createUser(){
         console.log("done",this.state)
         fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
          
  }

     goesToLogin(){
       this.props.navigation.navigate('Login')
     }

     createdUser(){
       this.createUser()
       this.goesToLogin()
     }


render() {
  
    return (
        <ImageBackground source={require('.././assets/backImage.jpg')} style={{width: '100%', height: '100%'}}>  

        <KeyboardAvoidingView behavior="padding" enabled>
      

        <View behavior='padding' style={{ flex: 1, flexDirection: "column",padding:20}}>
        
         <StatusBar
            barStyle="light-content"
        />
       
    
        <View style={{flex:1,backgroundColor:"#DADDE6"}}>
      
        <View style={{marginTop:335}}>

        <View style={{flexDirection:'row',marginTop:-70,justifyContent:'space-between'}}>
            <View style={{flex:1}}>
                <TextInput
                style={styles.input3}
                placeholder="First name"
                placeholderTextColor='#0767FA'
                onChangeText={(name)=> this.setState({name})}
                />
            </View>
            <View>
                <Text>  </Text>
            </View>
            <View style={{flex:1}}>
                 <TextInput
                 style={styles.input4}
                 placeholder="Last name"
                 placeholderTextColor='#0767FA'
                 onChangeText={(lastname)=> this.setState({lastname})}
                />
            </View>
        
        </View>
       
       </View>
            <TextInput
                style={styles.input1}
                placeholder="Email address"
                underlineColorAndroid="transparent"
                placeholderTextColor='#0767FA'
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
                placeholderTextColor='#0767FA'
                returnKeyType='go'
                ref={(input)=>this.passwordTextInput=input}
                value={this.state.password}
                onChangeText={(password)=> this.setState({password})}
                 />
             </View>
         </View>

            <View style={{ height: 100, marginTop: 500 }}>
                <TouchableOpacity onPress={()=>this.createdUser()}>
                    <Text style={{textAlign:'center',color:'#FEFDFD',fontSize:25}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
          
      </View>

            </KeyboardAvoidingView>
      </ImageBackground>
    
    
    );
  }
}
const styles = StyleSheet.create({
   input1:{
       height: 45,
       borderColor:"#7777F9",
       borderWidth: 0.5,
       paddingHorizontal:10,
       borderRadius:30,
       backgroundColor:"#FFF2F0"
   },
    input2:{
        height: 45,
        borderColor: "#7777F9",
        borderWidth: 0.5,
        paddingHorizontal:10,
        borderRadius:30,
        backgroundColor:"#FFF2F0"
    },
    input3:{
        height: 45,
        borderColor: "#7777F9",
        borderWidth: 0.5,
        paddingHorizontal:10,
        borderRadius:30,
        backgroundColor:"#FFF2F0",
        justifyContent:'flex-start',
       
    },
    input4:{
        height: 45,
        borderColor: "#7777F9",
        borderWidth: 0.5,
        paddingHorizontal:10,
        borderRadius:30,
        backgroundColor:"#FFF2F0",
        justifyContent:'flex-end',
       
    },
    });
