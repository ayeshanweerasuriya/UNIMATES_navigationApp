// BottomToolbar.js

import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Platform } from "react-native";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconEnt from "react-native-vector-icons/Entypo";
import IconFea from "react-native-vector-icons/Feather";
import Modal from "react-native-modal";
import SearchBar from "./SearchBar";
import { useTheme } from './ThemeContext';

const BottomToolbar = ({ navigation }) => {
  const [isSearchModalVisible, setSearchModalVisible] = useState(false);
  const { isDarkMode } = useTheme();

  const toggleSearchModal = () => {
    setSearchModalVisible(!isSearchModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <TouchableOpacity style={styles.tools} onPress={toggleSearchModal}>
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

      <Modal
        isVisible={isSearchModalVisible}
        onBackdropPress={toggleSearchModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropColor= {isDarkMode ? '#333333' : '#FFE5B4'}
        backdropOpacity={0.9}
      >
        {/* Use the SearchBar component */}
        <SearchBar onClose={toggleSearchModal} navigation={navigation}/>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

