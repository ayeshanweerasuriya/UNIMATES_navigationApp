import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const CustomSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
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
  };

  const togglePosition = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <DarkModeSwitch
        isEnabled={isEnabled}
        onToggle={toggleSwitch}
        togglePosition={togglePosition}
      />
      <OtherOption text="About Us" icon="chevron-right" />
      <OtherOption text="Privacy Policy" icon="chevron-right" />
      <ReportBug />
      <Text style={styles.versionNum}>V 0.1</Text>
    </View>
  );
};

const DarkModeSwitch = ({ isEnabled, onToggle, togglePosition }) => (
  <View style={styles.darkModeContainer}>
    <Text style={styles.optionText}>Dark Mode</Text>
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onToggle}
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
);

const OtherOption = ({ text, icon }) => (
  <View style={styles.otherContainers}>
    <TouchableOpacity style={styles.otherContainersAlign}>
      <Text style={styles.optionText}>{text}</Text>
      <Icon name={icon} size={20} color="#000000" />
    </TouchableOpacity>
  </View>
);

const ReportBug = () => (
  <TouchableOpacity style={styles.bug}>
    <Icon name="bug" size={15} color="#000000" />
    <Text style={styles.bugText}>Report a Bug</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    margin: 20,
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
    backgroundColor: "#ffffff",
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

export default CustomSwitch;
