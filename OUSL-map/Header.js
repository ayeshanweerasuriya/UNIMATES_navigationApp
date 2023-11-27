import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  StatusBar,
  SafeAreaView
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const CustomHeader = ({ title, navigation }) => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <StatusBar backgroundColor="#FFA500" barStyle="light-content" />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.touchableArea}
      >
        <Icon name="left" size={22} color="#fff" style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 30,
    backgroundColor: "#FFA500",
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
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
  touchableArea: {
    padding: 10,
    marginRight: 30
  },
  icon: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    right: 50
  },
});

export default CustomHeader;

