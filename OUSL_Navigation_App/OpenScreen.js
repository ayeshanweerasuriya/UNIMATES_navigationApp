import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function OpenScreen() {
  return (
    <View style={styles.container}>
      <Text>Open University of Sri Lanka</Text>
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