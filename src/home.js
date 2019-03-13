import React from 'react';
import { StyleSheet,Text, Image,View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


class Feed extends React.Component {
  
constructor(){
    super();
    this.state={
        text:'see your information'
    }
}



changedText=()=>{
    this.setState({text:`${this.state.email}`})
}
  render() {
    return (
      <View style={styles.view}>
        <Text onPress={this.changedText}>{this.state.text}</Text>
      </View>
    );
  }
}

class Profile extends React.Component {
    
  render() {
    return (
      <View style={styles.view}>
        <Text>Hadi</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Feed: Feed,
  Profile: Profile,
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
    view:{
        flex: 1,
         justifyContent: 'center',
          alignItems: 'center' 
    }
})