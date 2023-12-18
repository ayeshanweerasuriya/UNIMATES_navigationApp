import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import MapComponent from "./MapComponent";
import BottomToolbar from "./BottomToolbar";
import { useTheme } from "./ThemeContext";

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
        <StatusBar
          translucent={true}
          backgroundColor={'transparent'}
          barStyle={isDarkMode ? "light-content" : "dark-content"}
        />
        {selectedPlace ? (
          // Render MapComponent with the selected place if available
          <MapComponent selectedPlace={selectedPlace} />
        ) : (
          // Render the default MapComponent without a selected place
          <MapComponent />
        )}
        <View style={styles.container}>
          <Text style={styles.lightText}>UNIMATES</Text>
          <Text style={{ color: isDarkMode ? '#ADD8E6' : '#000099' }}>&copy; 2023</Text>
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
    fontWeight: 'bold',
    fontSize: 14,
    textShadowColor: "#333",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    position: "relative",
  },
  darkText: {
    color: "#fff",
  },
});

export default Home;

