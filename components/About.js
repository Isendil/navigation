import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>About </Text>
        <Button
          title="Go to Profile View"
          onPress={() => this.props.navigation.navigate("Profile")}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go to Chat"
          onPress={() => this.props.navigation.navigate("Chat")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
export default About;
