import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { useFocusEffect } from "@react-navigation/native";

const Messages = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = db
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
      return () => {
        unsubscribe();
      };
    }, [])
  );

  const sendMessage = () => {
    console.log("Sent a message", input);
    db.collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <View style={styles.container}>
      <FlatList
      style={styles.flatList}
        data={messages}
        renderItem={({ item, index }) => (
          <TouchableOpacity>
            <Text>{item.data.message}</Text>
          </TouchableOpacity>
        )}
      />
      <TextInput
        value={input}
        onSubmitEditing={sendMessage}
        onChangeText={(text) => setInput(text)}
        placeholder="Message..."
      />
      <Button style={styles.sendButton} onPress={sendMessage} title="Send Messages" />
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container:{
    height: "100%",
  }
});
