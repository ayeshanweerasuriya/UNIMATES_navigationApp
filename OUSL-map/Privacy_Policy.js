import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CustomHeader from "./Header";
import { useTheme } from "./ThemeContext";

const policy = (subHeading, paragraph, isDarkMode) => {
  return (
    <View style={styles.policy}>
      <Text style={[styles.subHeading, isDarkMode && styles.darkText]}>
        {subHeading}
      </Text>
      <Text style={[styles.paragraph, isDarkMode && styles.darkText]}>
        {paragraph}
      </Text>
    </View>
  );
};

const PrivacyPolicy = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  return (
    <>
      <CustomHeader title="Privacy Policy" navigation={navigation} />
      <View style={[styles.container, isDarkMode && styles.darkTheme]}>
        <Text style={[styles.mainTitle, isDarkMode && styles.darkText]}>
          We may collect the following types of information when you use our App
        </Text>
        <ScrollView
          style={[styles.ScrollView, isDarkMode && styles.darkThemeForScroll]}
        >
          {/* The policy content */}
          <View style={styles.policy}>
            {policy(
              "1. Information We Collect",
              "information about how you use the App, including your interactions with the App, the routes you take, and other navigation-related data.",
              isDarkMode
            )}
            {policy(
              "1. Information We Collect",
              "information about how you use the App, including your interactions with the App, the routes you take, and other navigation-related data.",
              isDarkMode
            )}
            {policy(
              "1. Information We Collect",
              "information about how you use the App, including your interactions with the App, the routes you take, and other navigation-related data.",
              isDarkMode
            )}
            {policy(
              "1. Information We Collect",
              "information about how you use the App, including your interactions with the App, the routes you take, and other navigation-related data.",
              isDarkMode
            )}
            {policy(
              "1. Information We Collect",
              "information about how you use the App, including your interactions with the App, the routes you take, and other navigation-related data.",
              isDarkMode
            )}
            {policy(
              "1. Information We Collect",
              "information about how you use the App, including your interactions with the App, the routes you take, and other navigation-related data.",
              isDarkMode
            )}

            <Text
              style={[styles.AgreeParagraph, isDarkMode && styles.darkText]}
            >
              By using our App, you acknowledge that you have read and
              understood this Privacy Policy and consent to the collection and
              use of your information as described herein.
            </Text>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.agreeBtn}>
          <Text style={styles.btnText}>I Agree</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#ffffff",
  },

  mainTitle: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },

  policy: {
    marginBottom: 15,
  },

  subHeading: {
    fontSize: 12,
    fontWeight: "500",
  },
  paragraph: {
    fontSize: 12,
    textAlign: "justify",
  },

  AgreeParagraph: {
    fontSize: 12,
    textAlign: "justify",
    marginVertical: 20,
  },

  ScrollView: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    marginVertical: 30,
  },

  agreeBtn: {
    marginBottom: 30,
    backgroundColor: "#FFA500",
    width: 100,
    borderRadius: 5,
    padding: 10,
    alignSelf: "center",
    alignItems: "center",
  },

  btnText: {
    fontWeight: "bold",
    color: "white",
  },

  darkTheme: {
    backgroundColor: "#1E1E1E",
  },

  darkThemeForScroll: {
    backgroundColor: "#2e2e2e",
  },

  darkText: {
    color: "#FFFFFF",
  },
});

export default PrivacyPolicy;
