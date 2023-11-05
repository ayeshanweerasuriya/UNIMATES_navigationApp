// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OpenScreen from './OpenScreen';
// import Home from './Home';
// import Direction from './Direction';
// import Settings from './Settings';
// import AboutUs from './AboutUs';
// import SavedLocations from './SavedLocations';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OpenScreen">
        <Stack.Screen name="OpenScreen" component={OpenScreen} options={{headerShown: false}} />
        {/* <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Direction" component={Direction} options={{headerShown: false}} />
        <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}} />
        <Stack.Screen name="AboutUs" component={AboutUs} options={{headerShown: false}} />
        <Stack.Screen name="SavedLocations" component={SavedLocations} options={{headerShown: false}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
