import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useTheme } from "./ThemeContext";

const { width, height } = Dimensions.get("window");

const AboutUs = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const styles = createStyles(isDarkMode);

  return (
    <View style={[styles.container, styles.wrapper]}>
      <Image
        source={require("../assets/coverPhoto.jpg")}
        style={styles.aboutUsImage}
      />
      <Text style={styles.aboutUsText}>About Us</Text>
      <Text
        style={[
          styles.aboutUsParagraph,
          { color: isDarkMode ? "#FFFFFF" : "#343434" },
        ]}
      >
        Three futuristic minds united in code, we're your developers from the
        future. With tech wizardry at our fingertips, we craft software
        solutions that seem like they're from another dimension. From web
        galaxies to mobile universes, we're on a mission to turn your sci-fi
        dreams into digital realities. Beam us up for out-of-this-world code!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const createStyles = (isDarkMode) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? "#1E1E1E" : "#ffffff",
      paddingTop: height * 0.2,
      padding: width * 0.05,
    },

    aboutUsText: {
      marginTop: 30,
      color: "#9D9D9D",
      textAlign: "center",
      fontSize: 24,
      fontWeight: "bold",
    },

    aboutUsImage: {
      width: "100%",
      height: 200,
      borderRadius: 15,
      resizeMode: "cover",
    },

    aboutUsParagraph: {
      textAlign: "justify",
      paddingTop: 20,
      lineHeight: 24,
      fontWeight: "bold",
    },

    button: {
      marginTop: 60,
      backgroundColor: "#FFA500",
      width: 100,
      borderRadius: 5,
      padding: 10,
      alignSelf: "center",
      alignItems: "center",
    },

    buttonText: {
      fontWeight: "bold",
      color: "white",
    },
  });

export default AboutUs;
