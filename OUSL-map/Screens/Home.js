import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import MapComponent from "./MapComponent";
import BottomToolbar from "./BottomToolbar";
import { useTheme } from "./ThemeContext";
import { BlurView } from "expo-blur";
import { Svg } from "react-native-svg";

const Home = ({ route, navigation }) => {
  const { isDarkMode } = useTheme();
  const selectedPlace = route.params?.selectedPlace;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -100}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        {selectedPlace ? (
          // Render MapComponent with the selected place if available
          <MapComponent selectedPlace={selectedPlace} />
        ) : (
          // Render the default MapComponent without a selected place
          <MapComponent />
        )}

        {/* <Svg height="40" width="150">
          <Text fill="none" stroke="#FFA500" fontSize="15" fontWeight="bold" textAnchor="middle" x="100" y="20">
            UNIMATES
          </Text>
        </Svg> */}

        <View style={styles.container}>
          <Text style={[styles.lightText, isDarkMode && styles.darkText]}>
            UNIMATES
          </Text>
          <Text style={isDarkMode && styles.darkText}>&copy; 2023</Text>
        </View>

        <BottomToolbar navigation={navigation} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    position: "absolute",
    marginBottom: "18%",
    marginLeft: "4%",
  },
  lightText: {
    color: "#FFA500",
    fontWeight: 500,
    fontSize: 14,
    textShadowColor: '#333',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    position: 'relative'
    
  },
  darkText: {
    color: "#fff",
  },
});

export default Home;
