import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, View, Animated, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import Svg, { Circle } from "react-native-svg";

const { width, height } = Dimensions.get("window");

export default function LaunchScreen({ navigation }) {
  const animation = useRef(null);
  const maskRadius = useRef(new Animated.Value(0)).current;
  const [isAnimationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      animateMask();
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const animateMask = () => {
    Animated.timing(maskRadius, {
      toValue: Math.sqrt(width * width + height * height),
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setAnimationComplete(true);
    });
  };

  return (
    <View style={styles.animationContainer}>
      <View style={styles.logo}>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
          }}
          source={require("../assets/data.json")}
          onAnimationFinish={() => {
            if (isAnimationComplete) {
              // Red color animation is complete, perform any additional actions
              navigation.navigate("Home");
            }
          }}
        />
      </View>
      <View style={styles.overlayContainer}>
        <Svg height={height} width={width}>
          <AnimatedCircle
            cx={width / 2}
            cy={height / 2}
            r={maskRadius}
            fill="red"
          />
        </Svg>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    position: "absolute",
    zIndex: 1,
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
