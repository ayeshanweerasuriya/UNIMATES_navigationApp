import React, { useEffect } from 'react'; // import useEffect
import { useNavigation } from '@react-navigation/native'; // import useNavigation
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function OpenScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to 'Home' after 5 seconds
      navigation.navigate('Home');
    }, 5000); // 5000 ms = 5 seconds

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/Logo-OUSL.png')} style={styles.img} />
      <Text style={styles.text}>OPEN UNIVERSITY OF SRI LANKA</Text>
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
  img: {
    height: 148,
    width: 104,
  },
  text: { // Updated style for text
    fontWeight: 'bold', // Use 'bold' instead of 700
    margin: 5,
  }
});
