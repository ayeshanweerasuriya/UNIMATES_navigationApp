// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { ThemeProvider } from "./Screens/ThemeContext";

// import LaunchScreen from "./Screens/LaunchScreen";
// import Home from "./Screens/Home";
// import Settings from "./Screens/Settings";
// import PrivacyPolicy from "./Screens/Privacy_Policy";
// import AboutUs from "./Screens/AboutUs";
// import MapComponent from "./Screens/MapComponent";
// import BugReport from "./Screens/BugReport";


// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <ThemeProvider>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName="LaunchScreen"
//           screenOptions={{ headerShown: false }}
//         >
//           <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
//           <Stack.Screen name="Home" component={Home} />
//           <Stack.Screen name="MapComponent" component={MapComponent} />
//           <Stack.Screen name="Settings" component={Settings} />
//           <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
//           <Stack.Screen name="AboutUs" component={AboutUs} />
//           <Stack.Screen name="BugReport" component={BugReport} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </ThemeProvider>
//   );
// };

// export default AppNavigator;

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from './Screens/ThemeContext';

import Home from './Screens/Home';
import Settings from './Screens/Settings';
import PrivacyPolicy from './Screens/Privacy_Policy';
import AboutUs from './Screens/AboutUs';
import MapComponent from './Screens/MapComponent';
import BugReport from './Screens/BugReport';
import { StyleSheet, View, Image, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.hideAsync();

const Stack = createStackNavigator();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        // Your app initialization code here

        // Simulate a delay (remove this in a production environment)
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        setSplashVisible(false);
      }
    }

    prepare();
  }, []);

  if (!appIsReady && splashVisible) {
    return (
    <View style={styles.container}>
      <Image
        source={require("./assets/Designed_Logo.png")}
        style={styles.img}
      />
        <Text style={styles.ouslText}>OPEN UNIVERSITY OF SRI LANKA</Text>
        <Text style={styles.nawalaText}>Nawala</Text>
      </View>
    );
  }

  if (!appIsReady) {
    return null; // or another loading state if needed
  }

  return (
    <ThemeProvider>
      {appIsReady && splashVisible ? null : (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MapComponent" component={MapComponent} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <Stack.Screen name="AboutUs" component={AboutUs} />
            <Stack.Screen name="BugReport" component={BugReport} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 124,
    width: 124,
  },
  ouslText: {
    // Updated style for text
    fontWeight: "bold", // Use 'bold' instead of 700
    margin: 10, // Increase the margin size by 5 for new logo
  },
  nawalaText : {
    bottom: 0, 
    position: "absolute",
    marginBottom: "7%",
    color: 'grey',
    fontSize: 22
  }
});

export default App;

