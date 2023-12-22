import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import MapComponent from "./MapComponent";
import BottomToolbar from "./BottomToolbar";
import { useTheme } from "./ThemeContext";

const Home = ({ route, navigation }) => {
  const { isDarkMode } = useTheme();
  const selectedPlace = route.params?.selectedPlace;

  const [toolbarVisible, setToolbarVisible] = useState(true);
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const tapCount = useRef(0);

  const toggleToolbar = () => {
    Animated.timing(slideAnimation, {
      toValue: toolbarVisible ? 1 : 0,
      useNativeDriver: false,
    }).start(() => {
      setToolbarVisible(!toolbarVisible);
    });
  };

  const translateY = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });


  const resetTapCount = () => {
    tapCount.current = 0;
  };

  const handlePress = () => {
    tapCount.current += 1;

    if (tapCount.current === 1) {
      setTimeout(() => {
        if (tapCount.current === 1) {
          toggleToolbar();
        }

        resetTapCount();
      }, 250);
    } else {
      resetTapCount();
    }
  };

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
          <MapComponent selectedPlace={selectedPlace} />
        ) : (
          <MapComponent />
        )}

        <TouchableWithoutFeedback onPress={handlePress}>
          <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
            <Text style={styles.lightText}>UNIMATES</Text>
            <Text style={{ color: isDarkMode ? '#ADD8E6' : '#000099' }}>&copy; 2023</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
          
        {toolbarVisible && <BottomToolbar navigation={navigation} />}
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
    fontWeight: "500",
    fontSize: 14,
    textShadowColor: "#333",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    position: "relative",
  },
  darkText: {
    color: "#fff",
  },
  toolbar: {
    height: '100%',
    width: '100%'
  }
});

export default Home;
