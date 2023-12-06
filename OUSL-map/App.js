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
import BugReport from "./Screens/BugReport";


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LaunchScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MapComponent" component={MapComponent} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
          <Stack.Screen name="BugReport" component={BugReport} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppNavigator;
