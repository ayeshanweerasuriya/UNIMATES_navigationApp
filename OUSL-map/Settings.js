import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Settings = ( {navigation} ) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(toggleAnim, {
      toValue: isEnabled ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isEnabled, toggleAnim]);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setIsDarkMode((previousState) => !previousState);
  };

  const togglePosition = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20], // Adjust this value according to your needs
    extrapolate: "clamp", // Add this line
  });

  return (
    <View style={[styles.container, isDarkMode && styles.darkTheme]}>
      <View style={styles.darkModeContainer}>
        <Text style={styles.OptionText}>Dark Mode</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={toggleSwitch}
          style={[
            styles.switchStyle,
            { backgroundColor: isEnabled ? "#BA7815" : "#767577" },
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
      <View style={styles.otherContainers}>
        <TouchableOpacity style={styles.otherContainersAlign}>
          <Text style={[styles.OptionText, isDarkMode && styles.darkText]}>
            About Us
          </Text>
          <Icon
            name="chevron-right"
            size={20}
            color={isDarkMode ? "#FFFFFF" : "#000000"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.otherContainers}>
        <TouchableOpacity style={styles.otherContainersAlign} onPress={() => navigation.navigate('PrivacyPolicy')}>
          <Text style={[styles.OptionText, isDarkMode && styles.darkText]}>
            Privacy Policy
          </Text>
          <Icon
            name="chevron-right"
            size={20}
            color={isDarkMode ? "#FFFFFF" : "#000000"}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.bug}>
        <Icon name="bug" size={15} color={isDarkMode ? "#FFFFFF" : "#000000"} />
        <Text style={[styles.bugText, isDarkMode && styles.darkText]}>
          Report a Bug
        </Text>
      </TouchableOpacity>
      <Text style={[styles.versionNum, isDarkMode && styles.darkText]}>
        V 0.1
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    padding: 20,
  },

  darkTheme: {
    backgroundColor: "#1E1E1E",
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

  OptionText: {
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
