import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useTheme } from "./ThemeContext";

export default function AboutUs({ navigation }) {
  const { isDarkMode } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          source={require("./assets/coverPhoto.jpg")}
          style={styles.aboutUsImage}
        />
        <Text style={styles.aboutUsText}>About Us</Text>
        <Text style={styles.aboutUsParagraph}>
          Three futuristic minds united in code, we're your developers from the
          future. With tech wizardry at our fingertips, we craft software
          solutions that seem like they're from another dimension. From web
          galaxies to mobile universes, we're on a mission to turn your sci-fi
          dreams into digital realities. Beam us up for out-of-this-world code!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 100,
  },

  wrapper: {
    margin: 20,
  },

  aboutUsText: {
    marginTop: 30,
    color: "#9D9D9D",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },

  aboutUsImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  aboutUsParagraph: {
    textAlign: "justify",
    paddingTop: 20,
    color: "#343434",
    lineHeight: 24,
    letterSpacing: 1,
    fontWeight: "500",
  },
  button: {
    marginTop: 100,
    backgroundColor: "#FFA500",
    width: 100,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },

  darkTheme: {
    backgroundColor: "#1E1E1E",
  },
  darkText: {
    color: "#FFFFFF",
  },
});
