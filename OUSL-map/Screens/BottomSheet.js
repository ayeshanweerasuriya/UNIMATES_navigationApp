import { TouchableOpacity, Dimensions, StyleSheet, Text, View } from "react-native";
import react, { useEffect } from "react";
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import SelectedLocation from "./SelectedLocation";
import { useTheme } from "./ThemeContext";

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;
const DEFAULT_TRANSLATE_Y = -SCREEN_HEIGHT / 5;

const BottomSheet = ({ selectedMarker, onClose, placeName }) => {
    const translateY = useSharedValue(0)
    const { isDarkMode } = useTheme();

    const context = useSharedValue({ y: 0 })
    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = { y: translateY.value }
        })
        .onUpdate((event) => {
            translateY.value = event.translationY + context.value.y
            translateY.value = Math.min(translateY.value, DEFAULT_TRANSLATE_Y)
            translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y)
        })
        .onEnd(() => {
            if (translateY.value > -SCREEN_HEIGHT / 3) {
                translateY.value = withSpring(DEFAULT_TRANSLATE_Y, { damping: 50 })
            } else if (translateY.value < -SCREEN_HEIGHT / 2) {
                translateY.value = withSpring(MAX_TRANSLATE_Y, { damping: 50 })
            }
        })

    useEffect(() => {
        translateY.value = withSpring(DEFAULT_TRANSLATE_Y, { damping: 50 })
    }, [])

    const rBottomSheetStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(
            translateY.value,
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
            [25, 5],
            Extrapolate.CLAMP
        )
        return {
            borderRadius,
            transform: [{ translateY: translateY.value }],
            zIndex: 1,
        };
    })

    return (
        <GestureDetector gesture={gesture}>
        	<Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle, isDarkMode && styles.darkTheme]}>
                <View style={styles.line} />
                <SelectedLocation placeName={placeName} selectedMarker={selectedMarker}onClose={onClose} />
            </Animated.View>
        </GestureDetector>
    )
}

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: SCREEN_HEIGHT,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        top: SCREEN_HEIGHT,
        borderRadius: 25,
        position: 'absolute',
        zIndex: 1,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: -2 },
                shadowOpacity: 0.2,
                shadowRadius: 6,
            },
            android: {
                elevation: 6,
            },
        }),
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 2,
    },
    darkTheme: {
    	backgroundColor: "#1E1E1E",
  },
})

export default BottomSheet;
