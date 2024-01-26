import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ChatMessage from './component/message';
import ChatInput from './component/input';
import CustomTopNavBar from './component/navbar'

export const App = () => { 
  const [messages, setMessages] = React.useState([
    { id: '1', text: 'BIEEEBZ!', sender: 'John', time: '15:34' },
    { id: '2', text: 'Herro', sender: 'Jane', time: '15:37' }, 
    { id: '4', text: 'replying to "Herro', sender: 'John', time: '15:37', replyTo: { sender: 'Justin Bieber', text: 'Herrro' } },
  ]);

  const handleSendMessage = (text: string) => {
    const newMessage = {
      id: String(messages.length + 1),
      text,
      sender: 'John',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
  };

  return (
    <>
     <CustomTopNavBar />
     <View style={styles.container}>   
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatMessage message={item} isCurrentUser={item.sender === 'John'} />}
      />
      <ChatInput onSendMessage={handleSendMessage} />
    </View>
     </>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 16,
  },
});
