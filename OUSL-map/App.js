import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "./Screens/ThemeContext";

import LaunchScreen from "./Screens/LaunchScreen";
import Home from "./Screens/Home";
import SearchBar from "./Screens/SearchBar";
import Settings from "./Screens/Settings";
import PrivacyPolicy from "./Screens/Privacy_Policy";
import AboutUs from "./Screens/AboutUs";
import MapComponent from "./Screens/MapComponent";
import BugReport from "./Screens/BugReport";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LaunchScreen">
          <Stack.Screen
            name="LaunchScreen"
            component={LaunchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SearchBar"
            component={SearchBar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MapComponent"
            component={MapComponent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PrivacyPolicy"
            component={PrivacyPolicy}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AboutUs"
            component={AboutUs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BugReport"
            component={BugReport}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppNavigator;
