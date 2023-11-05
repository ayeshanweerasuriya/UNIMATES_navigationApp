// import React, { useRef, useState } from 'react';
// import { Animated, Image, TouchableOpacity, StyleSheet, View } from 'react-native';
// import { PanGestureHandler, PinchGestureHandler } from 'react-native-gesture-handler';

// const Home = () => {
//   const [scale, setScale] = useState(1);
//   const panRef = useRef();
//   const pinchRef = useRef();
//   const baseScale = useRef(new Animated.Value(1)).current;
//   const pinchScale = useRef(new Animated.Value(1)).current;
//   let lastScale = 1;

//   const onPinchGestureEvent = Animated.event(
//     [{ nativeEvent: { scale: pinchScale } }],
//     { useNativeDriver: true }
//   );

//   const onZoomIn = () => {
//     setScale(scale * 1.1);
//   };

//   const onZoomOut = () => {
//     setScale(scale * 0.9);
//   };

//   // Don't forget to handle the state changes and animations for panning as well.

//   return (
//     <View style={styles.container}>
//       <PanGestureHandler
//         ref={panRef}
//         onGestureEvent={/* ... */}>
//         <PinchGestureHandler
//           ref={pinchRef}
//           onGestureEvent={onPinchGestureEvent}
//           onHandlerStateChange={/* ... */}>
//           <Animated.Image
//             source={require('./path-to-your-map-image.png')}
//             style={[styles.map, { transform: [{ scale: Animated.multiply(baseScale, pinchScale) }] }]}
//             resizeMode="contain"
//           />
//         </PinchGestureHandler>
//       </PanGestureHandler>
//       <TouchableOpacity onPress={onZoomIn} style={styles.zoomIn}>
//         {/* Add Zoom In Icon */}
//       </TouchableOpacity>
//       <TouchableOpacity onPress={onZoomOut} style={styles.zoomOut}>
//         {/* Add Zoom Out Icon */}
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   map: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   zoomIn: {
//     position: 'absolute',
//     right: 10,
//     bottom: 60,
//     // Add styles for the button
//   },
//   zoomOut: {
//     position: 'absolute',
//     right: 10,
//     bottom: 10,
//     // Add styles for the button
//   }
// });

// export default Home;

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Screen...</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
