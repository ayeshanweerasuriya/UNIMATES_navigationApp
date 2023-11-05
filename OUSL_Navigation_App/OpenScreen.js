import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function OpenScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/Logo-OUSL.png')} style={styles.img} />
      <Text style={{fontWeight: 700, margin: 5}}>OPEN UNIVERSITY OF SRI LANKA</Text>
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
  }
});