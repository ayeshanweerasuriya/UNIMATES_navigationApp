import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  Appearance,
} from "react-native";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTheme } from "./ThemeContext";
import CustomHeader from "./Header";
import { BlurView } from "expo-blur";

const { width, height } = Dimensions.get("window");

const Settings = ({ navigation }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const styles = createStyles(isDarkMode);
  const [isEnabled, setIsEnabled] = useState(isDarkMode);
  const toggleAnim = useRef(new Animated.Value(isDarkMode ? 1 : 0)).current;

  useEffect(() => {
    const colorSchemeChangeListener = Appearance.addChangeListener(
      ({ colorScheme }) => {
        setIsEnabled(colorScheme === "dark");
      }
    );

    return () => {
      colorSchemeChangeListener.remove();
    };
  }, []);

  useEffect(() => {
    Animated.timing(toggleAnim, {
      toValue: isEnabled ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isEnabled, toggleAnim]);

  const toggleSwitch = () => {
    setIsEnabled((prev) => !prev);
    toggleDarkMode();
  };

  const togglePosition = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
    extrapolate: "clamp",
  });

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <>
      <CustomHeader title="Settings" navigation={navigation} />
      <View style={[styles.container, isDarkMode && styles.darkTheme]}>
        <View style={styles.darkModeContainer}>
          <Text style={styles.optionText}>Dark Mode</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={toggleSwitch}
            style={[
              styles.switchStyle,
              { backgroundColor: isEnabled ? "#FFA500" : "#767577" },
            ]}
          >
            <View style={styles.toggleContainer}>
              <Animated.View
                style={[
                  styles.toggleButton,
                  { transform: [{ translateX: togglePosition }] },
                ]}
              />
            </View>
          </TouchableOpacity>
        </View>
        {renderOption("About Us", "AboutUs")}
        {renderOption("Privacy Policy", "PrivacyPolicy")}

        {renderBugReport("Bug Report", "BugReport")}

        <Text style={[styles.versionNum, isDarkMode && styles.darkText]}>
          V 0.1
        </Text>
      </View>
    </>
  );

  function renderOption(optionText, screenName) {
    return (
      <View style={styles.otherContainers}>
        <TouchableOpacity
          style={styles.otherContainersAlign}
          onPress={() => navigateToScreen(screenName)}
        >
          <Text style={[styles.optionText, isDarkMode && styles.darkText]}>
            {optionText}
          </Text>
          <Icon
            name="chevron-right"
            size={20}
            color={isDarkMode ? "#FFFFFF" : "#000000"}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderBugReport() {
    return (
      <TouchableOpacity
        style={styles.bug}
        onPress={() => navigateToScreen("BugReport")}
      >
        <Icon name="bug" size={15} color={isDarkMode ? "#FFFFFF" : "#000000"} />
        <Text style={[styles.bugText, isDarkMode && styles.darkText]}>
          Report a Bug
        </Text>
      </TouchableOpacity>
    );
  }
};

const createStyles = (isDarkMode) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: height * 0.1,
      padding: width * 0.05,
      backgroundColor: isDarkMode ? "#1E1E1E" : "#ffffff",
    },

    darkModeContainer: {
      backgroundColor: "#F4F4F4",
      padding: 20,
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 40,
    },

    optionText: {
      fontWeight: "bold",
      fontSize: 15,
    },

    darkText: {
      color: "#FFFFFF",
    },

    switchStyle: {
      width: 50,
      height: 30,
      borderRadius: 15,
      justifyContent: "center",
      paddingHorizontal: 5,
    },

    toggleContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    toggleButton: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: "#fff",
    },

    otherContainersAlign: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    otherContainers: {
      padding: 20,
      borderRadius: 10,
    },

    versionNum: {
      textAlign: "center",
      fontSize: 10,
      fontWeight: "bold",
      color: "#343434",
      opacity: 0.5,
    },

    bug: {
      marginTop: 300,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      opacity: 0.5,
    },

    bugText: {
      marginLeft: 5,
    },
  });

export default Settings;
