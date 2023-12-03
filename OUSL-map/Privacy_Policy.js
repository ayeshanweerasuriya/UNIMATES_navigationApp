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
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const policyContent = [
  // Add more policies as needed
  {
    subHeading: "1. Information We Collect",
    paragraph:
      "Information about how you use the App, including your interactions with the App, the routes you take, and other navigation-related data.",
  },
  {
    subHeading: "2. Data Security",
    paragraph:
      "We prioritize the security of your data and implement measures to protect it from unauthorized access or disclosure.",
  },
  {
    subHeading: "3. Usage Analytics",
    paragraph:
      "We may collect anonymous analytics data to improve the user experience and optimize our services.",
  },
];

const policy = (policyItem, index, isDarkMode) => (
  <View style={styles.policy} key={`${policyItem.subHeading}-${index}`}>
    <Text style={[styles.subHeading, isDarkMode && styles.darkText]}>
      {policyItem.subHeading}
    </Text>
    <Text style={[styles.paragraph, isDarkMode && styles.darkText]}>
      {policyItem.paragraph}
    </Text>
  </View>
);

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
          {policyContent.map((policyItem, index) =>
            policy(policyItem, index, isDarkMode)
          )}
          <Text style={[styles.AgreeParagraph, isDarkMode && styles.darkText]}>
            By using our App, you acknowledge that you have read and understood
            this Privacy Policy and consent to the collection and use of your
            information as described herein.
          </Text>
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
    paddingTop: height * 0.1,
    padding: width * 0.05,
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
    paddingTop: 20,
    paddingBottom: 40,
    fontWeight: "500",
  },

  ScrollView: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    marginVertical: 30,
    flexGrow: 0,
    flexShrink: 1,
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
