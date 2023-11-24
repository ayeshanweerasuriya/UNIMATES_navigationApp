import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const CustomHeader = ({ title, navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrowleft" size={25} color="#fff" style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#FFA500", // Orange color
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    flexDirection: "row",

    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  icon: {
    marginTop: 10, // Adjust the space between icon and text
    marginRight: -25,
  },
  headerText: {
    marginTop: 15, // Adjust margin as needed
    flex: 1,
    textAlign: "center", // Center the text horizontally
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default CustomHeader;

// Example Usage:
// import CustomHeader from './Header';
// <CustomHeader title="Your Screen Title" navigation={navigation}/>
