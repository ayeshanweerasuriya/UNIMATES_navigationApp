import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const PrivacyPolicy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>
        We may collect the following types of information when you use our App
      </Text>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.policy}>
          <Text style={styles.subHeading}>
            1. Information We Collect We collect
          </Text>
          <Text style={styles.paragraph}>
            information about how you use the App, including your interactions
            with the App, the routes you take, and other navigation-related
            data.
          </Text>
          <Text style={styles.subHeading}>2. How We Use Your Information</Text>
          <Text style={styles.paragraph}>
            We use your location information to provide navigation and
            location-based services.
          </Text>
          <Text style={styles.subHeading}>3. Contact Us</Text>
          <Text style={styles.paragraph}>
            If you have any questions or concerns about this Privacy Policy or
            your data, please contact us at [email].
          </Text>
          <Text style={styles.permission}>
            By using our App, you acknowledge that you have read and understood
            this Privacy Policy and consent to the collection and use of your
            information as described herein.
          </Text>
          {/* delete from here */}
          {/* delete from here */}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.agreeBtn}>
        <Text style={styles.btnText}>I Agree</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 150,
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
    backgroundColor: "#BA7815",
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
});

export default PrivacyPolicy;
