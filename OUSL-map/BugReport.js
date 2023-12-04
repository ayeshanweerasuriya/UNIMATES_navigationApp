import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (showThankYou) {
      const closeBugReport = setTimeout(() => {
        setShowThankYou(false);
        onClose();
      }, 2000);

      return () => clearTimeout(closeBugReport);
    }
    return () => {};
  }, [showThankYou, onClose]);

  const handleSendEmail = async () => {
    const emailSubject = "Bug Report";

    try {
      const isAvailable = await MailComposer.isAvailableAsync();

      if (isAvailable) {
        const result = await MailComposer.composeAsync({
          subject: emailSubject,
          recipients: ["uamsankalpana@gmail.com"],
          body: `User Email: ${userEmail}\nDescription: ${description}`,
        });

        // Show the "thank you" message only if the email was sent (result.status === 'sent')
        if (result.status === "sent") {
          setShowThankYou(true);
        }
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
      onPress={() => Keyboard.dismiss()}
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
                  style={styles.input}
                  placeholder="Your email"
                  value={userEmail}
                  onChangeText={(text) => setUserEmail(text)}
                  onSubmitEditing={() => Keyboard.dismiss()}
                  placeholderTextColor="#888"
                  maxLength={35}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <TextInput
                  style={[styles.input, styles.description]}
                  placeholder="Description.. Please be as detailed as possible. What did you expect and what happened instead?"
                  multiline={true}
                  value={description}
                  onChangeText={(text) => setDescription(text)}
                  onSubmitEditing={() => Keyboard.dismiss()}
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
    input: {
      padding: 20,
      borderRadius: 20,
      marginVertical: 10,
      width: 250,
      textAlign: "center",
      color: isDarkMode ? "#ffffff" : "#1E1E1E",
      backgroundColor: isDarkMode ? "#2e2e2e" : "#f2f2f2",
    },
    description: {
      paddingTop: 15,
      minHeight: 100,
      maxHeight: 200,
      textAlign: "left",
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
