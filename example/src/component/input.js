// ChatInput.js

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ChatInput = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      onSendMessage(inputText);
      setInputText('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <TouchableOpacity onPress={handleSendMessage}>
        <Text style={styles.sendButton}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  input: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 8,
    color: '#000000',
  },
  sendButton: {
    marginLeft: 8,
    color: '#ffffff',
  },
});

export default ChatInput;
