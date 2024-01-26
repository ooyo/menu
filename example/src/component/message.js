// ChatMessage.js

import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MenuView } from '@react-native-menu/menu';

const ChatMessage = ({ message, isCurrentUser }) => {
  const { text, sender, time, replyTo } = message;

  return (
    <View
      style={[
      
        { alignSelf: isCurrentUser ? 'flex-end' : 'flex-start' },
      ]}
    >
      <MenuView 
        title="Menu Title"
        onPressAction={({ nativeEvent }) => {
          console.warn(JSON.stringify(nativeEvent));
        }}
        emoji={[
          {
            id: 'like',
            title: '👍', 
          },
          {
            id: 'heart',
            title: '❤️', 
          },
          {
            id: 'fire',
            title: '🔥', 
          },
          {
            id: 'shock',
            title: '😮', 
          },
          {
            id: 'laugh',
            title: '🤣',
          },
          {
            id: 'cry',
            title: '😢',
          },
        ]}
        actions={[
          {
            id: 'add',
            title: 'Add',
            titleColor: '#2367A2',
            image: Platform.select({
              ios: 'plus',
              android: 'ic_menu_add',
            }),
            imageColor: '#2367A2',
            displayInline: true,
            lineactions: [
              {
                id: 'nested1',
                title: 'Nested action',
                titleColor: 'rgba(250,180,100,0.5)',
                subtitle: 'State is mixed',
                image: Platform.select({
                  ios: 'heart.fill',
                  android: 'ic_menu_today',
                }),
                imageColor: 'rgba(100,200,250,0.3)',
                state: 'mixed',
              },
              {
                id: 'nestedDestructive',
                title: 'Destructive Action',
                attributes: {
                  destructive: true,
                },
                image: Platform.select({
                  ios: 'trash',
                  android: 'ic_menu_delete',
                }),
              },
            ],
          },
          {
            id: 'share',
            title: 'Share Action',
            titleColor: '#46F289',
            subtitle: 'Share action on SNS',
            image: Platform.select({
              ios: 'square.and.arrow.up',
              android: 'ic_menu_share',
            }),
            subactions: [
              {
                id: 'nested1',
                title: 'Nested action',
                titleColor: 'rgba(250,180,100,0.5)',
                subtitle: 'State is mixed',
                image: Platform.select({
                  ios: 'heart.fill',
                  android: 'ic_menu_today',
                }),
                imageColor: 'rgba(100,200,250,0.3)',
                state: 'mixed',
              },
              {
                id: 'nestedDestructive',
                title: 'Destructive Action',
                attributes: {
                  destructive: true,
                },
                image: Platform.select({
                  ios: 'trash',
                  android: 'ic_menu_delete',
                }),
              },
            ],
            imageColor: '#46F289',
            state: 'on',
          },
          {
            id: 'destructive',
            title: 'Destructive Action',
            attributes: {
              destructive: true,
            },
            image: Platform.select({
              ios: 'trash',
              android: 'ic_menu_delete',
            }),
          },
        ]}
        shouldOpenOnLongPress={true}
      >
        <View style={styles.messageContainer}>
        {replyTo && (
            <Text
              style={styles.replyToText}
            >{`${replyTo.sender}: ${replyTo.text}`}</Text>
          )}
          <View style={  isCurrentUser ? styles.messageBubbleSender : styles.messageBubble}> 
          <Text style={styles.messageText}>{text}</Text>
          <Text style={styles.timeText}>{time}</Text>
          </View>
        </View>
      </MenuView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  messageContainer: {
    marginBottom: 10,
    padding: 5,
    paddingBottom:10
  },
  replyToText: {
    color: '#fff',
    marginBottom: 4,
    textAlign: "left",
    borderLeftWidth: 1, 
    paddingLeft: 10,
    borderLeftColor: 'white',
    width: "70%",
    alignSelf: 'flex-end'
  },
  messageBubble: { 
    borderRadius: 8,
    padding: 5,
    backgroundColor: '#181818',
    borderTopLeftRadius: 0
  },
  messageBubbleSender: { 
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#6B5ECF',
    borderBottomRightRadius: 0
  },
  messageText: {
    color: '#ffffff',
  
  },
  timeText: {
    color: '#ffffff',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'right',
  },
});

export default ChatMessage;
