import React, { useState } from "react";
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
import { Entypo } from "@expo/vector-icons";
import * as MailComposer from "expo-mail-composer";
import { useTheme } from "./ThemeContext";

const BugReport = ({ onClose }) => {
  const { isDarkMode } = useTheme();
  const styles = createStyles(isDarkMode);

  const [description, setDescription] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleSendEmail = async () => {
    const emailSubject = "Bug Report";

    try {
      const isAvailable = await MailComposer.isAvailableAsync();

      if (isAvailable) {
        await MailComposer.composeAsync({
          subject: emailSubject,
          recipients: ["uamsankalpana@gmail.com"],
          body: `User Email: ${userEmail}\nDescription: ${description}`,
        });

        // Show the "thank you" message
        setShowThankYou(true);

        // Close the BugReport component after 2 seconds
        setTimeout(() => {
          setShowThankYou(false);
          onClose();
        }, 2000);
      } else {
        console.warn("Mail Composer is not available on this device");
      }
    } catch (error) {
      console.error("Could not send email", error);
    }
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
          {showThankYou ? (
            <View style={styles.thankYouContainer}>
              <Text style={styles.thankYouText}>
                Thank you for your feedback!
              </Text>
            </View>
          ) : (
            <>
              <View style={styles.heading}>
                <TouchableOpacity onPress={onClose}>
                  <Entypo name="cross" size={24} style={styles.cross} />
                </TouchableOpacity>
                <Text style={styles.headingText}>Bug Report</Text>
                <TouchableOpacity onPress={handleSendEmail}>
                  <Entypo
                    name="paper-plane"
                    size={15}
                    style={styles.paperPlane}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.titleBorder} />
              <View>
                <TextInput
                  style={styles.userEmail}
                  placeholder="Your email"
                  value={userEmail}
                  onChangeText={(text) => setUserEmail(text)}
                  onSubmitEditing={handleDismissKeyboard}
                  placeholderTextColor="#888"
                  maxLength={35}
                />
                <TextInput
                  style={styles.description}
                  placeholder="Description.. Please be as detailed as possible. What did you expect and what happened instead?"
                  multiline={true}
                  value={description}
                  onChangeText={(text) => setDescription(text)}
                  onSubmitEditing={handleDismissKeyboard}
                  placeholderTextColor="#888"
                  maxLength={300}
                />
              </View>
            </>
          )}
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
      width: 250,
      backgroundColor: isDarkMode ? "#2e2e2e" : "#f2f2f2",
      textAlign: "center",
      color: isDarkMode ? "#ffffff" : "#1E1E1E",
    },
    description: {
      padding: 20,
      paddingTop: 15,
      borderRadius: 20,
      backgroundColor: isDarkMode ? "#2e2e2e" : "#f2f2f2",
      minHeight: 100,
      maxHeight: 200,
      textAlignVertical: "top",
      width: 250,
      color: isDarkMode ? "#ffffff" : "#1E1E1E",
    },
    cross: {
      color: isDarkMode ? "#FFFFFF" : "#343434",
    },
    paperPlane: {
      color: isDarkMode ? "#FFFFFF" : "#343434",
    },
    thankYouContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    thankYouText: {
      fontSize: 18,
      fontWeight: "bold",
      color: isDarkMode ? "#FFFFFF" : "#343434",
    },
  });

export default BugReport;
