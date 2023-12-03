import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { useTheme } from "./ThemeContext";

const BugReport = ({ onClose }) => {
  const { isDarkMode } = useTheme();
  const styles = createStyles(isDarkMode);

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={handleDismissKeyboard}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.popupContainer}
      >
        <View style={styles.popup}>
          <View style={styles.heading}>
            <TouchableOpacity onPress={onClose}>
              <Entypo name="cross" size={24} style={styles.cross} />
            </TouchableOpacity>
            <Text style={styles.headingText}>Bug Report</Text>
            <TouchableOpacity>
              <Entypo name="paper-plane" size={15} style={styles.paperPlane} />
            </TouchableOpacity>
          </View>
          {/* Add a border below the title */}
          <View style={styles.titleBorder} />
          <View>
            <TextInput
              style={styles.userEmail}
              placeholder="Your email"
              onSubmitEditing={handleDismissKeyboard}
              placeholderTextColor="#888"
              maxLength={25}
            />
            <TextInput
              style={styles.description}
              placeholder="Description.. Please be as detailed as possible. What did you expect and what happened instead?"
              multiline={true}
              onSubmitEditing={handleDismissKeyboard}
              placeholderTextColor="#888"
              maxLength={300}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableOpacity>
  );
};

const createStyles = (isDarkMode) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    popupContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    popup: {
      backgroundColor: isDarkMode ? "#1E1E1E" : "#ffffff",
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
      color: isDarkMode ? "#FFFFFF" : "#343434",
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
      width: 250, // Set an absolute width in pixels
      backgroundColor: isDarkMode ? "#2e2e2e" : "#2e2e2e",
      textAlign: "center", // Center the text
      color: isDarkMode ? "#ffffff" : "#1E1E1E",
    },

    description: {
      padding: 20,
      paddingTop: 15,
      borderRadius: 20,
      backgroundColor: isDarkMode ? "#2e2e2e" : "#2e2e2e",
      minHeight: 100,
      maxHeight: 200,
      textAlignVertical: "top",
      width: 250, // Set an absolute width in pixels
      color: isDarkMode ? "#ffffff" : "#1E1E1E",
    },

    cross: {
      color: isDarkMode ? "#FFFFFF" : "#343434",
    },

    paperPlane: {
      color: isDarkMode ? "#FFFFFF" : "#343434",
    },
  });

export default BugReport;
