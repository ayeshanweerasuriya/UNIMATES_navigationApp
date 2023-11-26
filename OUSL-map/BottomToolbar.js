import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconEnt from "react-native-vector-icons/Entypo";
import IconFea from "react-native-vector-icons/Feather";

const BottomToolbar = ({ navigation }) => {
  return (
    <View style={styles.toolbar}>
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
    width: "92%",
    height: 85,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFA500",
    margin: "4%",
    borderRadius: 25,
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
  tools: {
    marginLeft: 25,
    marginRight: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomToolbar;
