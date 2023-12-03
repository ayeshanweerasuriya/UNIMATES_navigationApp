import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";

const BugReport = ({ onClose }) => {
  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={handleDismissKeyboard}
    >
      <View style={styles.popup}>
        <View style={styles.heading}>
          <TouchableOpacity onPress={onClose}>
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headingText}>Bug Report</Text>
          <FontAwesome name="paper-plane" size={15} color="black" />
        </View>
        {/* Add a border below the title */}
        <View style={styles.titleBorder} />
        <View>
          <TextInput
            style={styles.userEmail}
            placeholder="Your email"
            onSubmitEditing={handleDismissKeyboard}
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.description}
            placeholder="Description.. Please be as detailed as possible. What did you expect and what happened instead?"
            multiline={true}
            onSubmitEditing={handleDismissKeyboard}
          />
        </View>
      </View>
    </TouchableOpacity>
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
    paddingTop: 15,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    minHeight: 100,
    maxHeight: 200,
    textAlignVertical: "top",
  },
});

export default BugReport;
