import React from "react";
import { StyleSheet, Text, View,Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

const Home = ({ navigation }) => {
  // useFocusEffect(
  //   useCallback(() => {
  //     console.log("mounted");
  //     return () => {
  //       console.log("unmounted");
  //     };
  //   })
  // );
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("Messages")}
        title="Go to my messages"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
