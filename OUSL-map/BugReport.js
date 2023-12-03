import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";

const BugReport = () => {
  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <View style={styles.heading}>
          <TouchableOpacity>
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headingText}>Bug Report</Text>
          <FontAwesome name="paper-plane" size={15} color="black" />
        </View>
        {/* Add a border below the title */}
        <View style={styles.titleBorder} />
        <View>
          <TextInput style={styles.userEmail} placeholder="Your email" />
          <TextInput
            style={styles.description}
            placeholder="Description.. Please be as detailed as possible. What did you expect and what happened instead?"
            multiline={true}
            numberOfLines={2}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  titleBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: "100%",
    marginVertical: 10,
  },
  userEmail: {
    padding: 20,
    borderRadius: 20,
    marginVertical: 10,
    width: "100%",
    backgroundColor: "#f2f2f2",
  },

  description: {
    padding: 20,
    paddingTop: 15, // Adjust the top padding to align the placeholder
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    minHeight: 100, // Set a minimum height to prevent it from collapsing
    textAlignVertical: "top", // Start typing from the top
  },
});

export default BugReport;
