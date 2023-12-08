import React, { useEffect, useRef } from "react"; // import useEffect
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import { useTheme } from "./ThemeContext";

export default function LaunchScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // This will run only once after the component mounts
    // Wait for 5 seconds before starting the fade out animation
    const timer = setTimeout(() => {
      // Animate the opacity from 1 to 0 over a duration of 1000 milliseconds (1 second)
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true, // Add this line to ensure that native driver is used for better performance
      }).start(() => {
        // After the animation is done, navigate to the Home screen
        navigation.navigate("Home");
      });
    }, 4000); // Start fading out after 4 seconds

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <Animated.View
      style={[
        styles.container,
        isDarkMode && styles.darkTheme,
        {
          // Bind the animated value to the opacity property
          opacity: fadeAnim,
        },
      ]}
    >
      <Image
        source={require("../assets/Designed_Logo.png")}
        style={styles.img}
      />
      {/* <Text style={[styles.text, isDarkMode && styles.darkText]}>
        OPEN UNIVERSITY OF SRI LANKA
      </Text> */}
      <StatusBar style="auto" />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 124,
    // width: 104,
    // Updated logo width
    width: 124,
  },
  text: {
    // Updated style for text
    fontWeight: "bold", // Use 'bold' instead of 700
    margin: 10, // Increase the margin size by 5 for new logo
  },

  darkTheme: {
    backgroundColor: "#1E1E1E",
  },

  darkText: {
    color: "#FFFFFF",
  },
});
