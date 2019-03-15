import React from 'react';
import { StyleSheet,Text, Image ,View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { GiftedChat } from "react-native-gifted-chat";
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';



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






const CHATKIT_TOKEN_PROVIDER_ENDPOINT = 'hadicyb';
const CHATKIT_INSTANCE_LOCATOR = 'v1:us1:c1534dd5-da68-4103-b828-bcc77d3ffbbe';
const CHATKIT_ROOM_ID = '19928903';
const CHATKIT_USER_NAME = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/c1534dd5-da68-4103-b828-bcc77d3ffbbe/token';

class Chat extends React.Component {
    
  state = {
    messages: [],
  }
 
 
  componentDidMount() {
    const tokenProvider = new TokenProvider({
      url: CHATKIT_TOKEN_PROVIDER_ENDPOINT,
    });

    const chatManager = new ChatManager({
      instanceLocator: CHATKIT_INSTANCE_LOCATOR,
      userId: CHATKIT_USER_NAME,
      tokenProvider: tokenProvider,
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        this.currentUser.subscribeToRoom({
          roomId: CHATKIT_ROOM_ID,
          hooks: {
            onMessage: this.onReceive,
          },
        });
      });
  }
 

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
      messages={this.state.messages}
    onSend={messages => this.onSend(messages)}
    user={{
      _id: CHATKIT_USER_NAME
    }}
    />
    );
  }
}





const TabNavigator = createBottomTabNavigator({
  Feed: Feed,
  Chat: Chat,
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
    view:{
        flex: 1,
         justifyContent: 'center',
          alignItems: 'center' 
    },
})