import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "./Screens/ThemeContext";

import LaunchScreen from "./Screens/LaunchScreen";
import Home from "./Screens/Home";
import Settings from "./Screens/Settings";
import PrivacyPolicy from "./Screens/Privacy_Policy";
import AboutUs from "./Screens/AboutUs";
import MapComponent from "./Screens/MapComponent";
<<<<<<< HEAD
import BugReport from "./Screens/BugReport";
=======
>>>>>>> 58405e4dac8315df5f67319f70c0de3b72b7b7f2

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
<<<<<<< HEAD
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
=======
        <Stack.Navigator initialRouteName="LaunchScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MapComponent" component={MapComponent} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
>>>>>>> 58405e4dac8315df5f67319f70c0de3b72b7b7f2
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppNavigator;
