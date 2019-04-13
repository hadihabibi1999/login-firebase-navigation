import React from 'react';
import { StyleSheet,Text, Image,Button ,View } from 'react-native';
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

        <Button
           title="going to gallery"
           onPress={()=>this.props.navigation.navigate('Gallery')}/>

        <Text style={{marginTop:85}} onPress={this.changedText}>{this.state.text}</Text>

      </View>
    );
  }
}



const CHATKIT_TOKEN_PROVIDER_ENDPOINT = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/c1534dd5-da68-4103-b828-bcc77d3ffbbe/token";
const CHATKIT_INSTANCE_LOCATOR = 'v1:us1:c1534dd5-da68-4103-b828-bcc77d3ffbbe';
const CHATKIT_ROOM_ID = '20145924';
const CHATKIT_USER_NAME = 'hadicyb';

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
      })
      .catch(err => {
        console.log(err);
      });
  }

  onReceive = data => {
    const { id, senderId, text, createdAt } = data;
    const incomingMessage = {
      _id: id,
      text: text,
      createdAt: new Date(createdAt),
      user: {
        _id: senderId,
        name: senderId,
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXGGuS_PrRhQt73sGzdZvnkQrPXvtA-9cjcPxJLhLo8rW-sVA',
      },
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, incomingMessage),
    }));
  };


  onSend = (messages = []) => {
    messages.forEach(message => {
      this.currentUser
        .sendMessage({
          text: message.text,
          roomId: CHATKIT_ROOM_ID,
        })
        .then(() => {})
        .catch(err => {
          console.log(err);
        });
    });
  };


  render() {
    return  (
     
              <GiftedChat
                   messages={this.state.messages}
                   onSend={messages => this.onSend(messages)}
                   user={{_id: CHATKIT_USER_NAME }}
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