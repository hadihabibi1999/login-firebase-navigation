import React, { Component } from 'react';
import {Text,View} from 'react-native';

class Home extends Component {
    render() { 
        return ( 
            <View style={{alignItems:"center"}}>
                <Text style={{fontSize:30,color:'lightblue'}}>Home</Text>
            </View>
         );
    }
}
export default Home;