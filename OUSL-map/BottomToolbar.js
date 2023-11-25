import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconEnt from "react-native-vector-icons/Entypo";
import IconFea from "react-native-vector-icons/Feather";

const BottomToolbar = ({ navigation }) => {
  return (
    <View style={[styles.toolbar,  styles.shadow]}>
      <TouchableOpacity
        style={styles.tools}
        onPress={() => navigation.navigate("Search")}
      >
        <IconAnt name="search1" size={25} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tools}>
        <IconEnt name="direction" size={25} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tools}>
        <IconEnt name="save" size={25} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tools}>
        <IconFea
          name="settings"
          size={25}
          color="#fff"
          onPress={() => navigation.navigate("Settings")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    bottom: 0,
    position: "absolute",
    width: Dimensions.get("window").width,
    height: 85,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFA500",
    paddingBottom: 20,
  },
  tools: {
    marginLeft: 25,
    marginRight: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2,
  },
});

export default BottomToolbar;
