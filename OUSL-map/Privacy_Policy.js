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
          <View style={styles.policy}>
            <Text style={[styles.subHeading, isDarkMode && styles.darkText]}>
              1. Information We Collect We collect
            </Text>
            <Text style={[styles.paragraph, isDarkMode && styles.darkText]}>
              information about how you use the App, including your interactions
              with the App, the routes you take, and other navigation-related
              data.
            </Text>
            <Text style={[styles.subHeading, isDarkMode && styles.darkText]}>
              2. How We Use Your Information
            </Text>
            <Text style={[styles.paragraph, isDarkMode && styles.darkText]}>
              We use your location information to provide navigation and
              location-based services.
            </Text>
            <Text style={[styles.subHeading, isDarkMode && styles.darkText]}>
              3. Contact Us
            </Text>
            <Text style={[styles.paragraph, isDarkMode && styles.darkText]}>
              If you have any questions or concerns about this Privacy Policy or
              your data, please contact us at [email].
            </Text>
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
    paddingTop: 80,
    backgroundColor: "#ffffff",
  },

  mainTitle: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },

  policy: {
    margin: 20,
  },

  subHeading: {
    marginTop: 20,
    fontSize: 12,
    fontWeight: "500",
  },
  paragraph: {
    fontSize: 12,
    textAlign: "justify",
  },

  AgreeParagraph: {
    marginTop: 40,
    fontSize: 12,
    textAlign: "justify",
  },

  permission: {
    marginTop: 40,
    textAlign: "justify",
  },

  ScrollView: {
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    marginTop: 30,
    marginBottom: 30,
    height: 50,
  },

  agreeBtn: {
    marginBottom: 30,
    backgroundColor: "#FFA500",
    width: 100,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
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
