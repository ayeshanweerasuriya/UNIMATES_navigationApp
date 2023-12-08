import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import IconAnt from "react-native-vector-icons/AntDesign";
import { placesArray } from "./data";
import { useTheme } from "./ThemeContext";
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = ({ onClose, navigation }) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedPlace, setSearchedPlace] = useState(null);
  const { isDarkMode } = useTheme();

  const handleInputChange = (text) => {
    const filtered = placesArray.filter((place) =>
      place.name.toLowerCase().includes(text.toLowerCase())
    );
  
    // Sort the filtered array to prioritize results that start with the input
    filtered.sort((a, b) => {
      const aStartsWith = a.name.toLowerCase().startsWith(text.toLowerCase());
      const bStartsWith = b.name.toLowerCase().startsWith(text.toLowerCase());
  
      // Sort in descending order based on whether the name starts with the input
      if (aStartsWith && !bStartsWith) {
        return -1;
      } else if (!aStartsWith && bStartsWith) {
        return 1;
      } else {
        return 0;
      }
    });
  
    const limitedSuggestions = filtered.slice(0, 10);
  
    setFilteredData(limitedSuggestions);
    setQuery(text);
  };  

  const clearSearch = () => {
    setSearchText("");
  };

  const handlePlaceSelect = (place) => {
    setSearchedPlace(place);
    navigation.navigate("Home", { selectedPlace: place });
    onClose();
  };

  const renderAutocompleteItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePlaceSelect(item)}>
      <View style={styles.suggestionItem}>
        <IconAnt
          name="search1"
          size={18}
          color={isDarkMode ? "#fff" : "#333"}
        />
        <Text style={[styles.suggestionText, isDarkMode && styles.darkText]}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
  
    const inputRef = useRef(null);

  useEffect(() => {
    const delayFocus = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 1000); // Set the delay time in milliseconds

    return () => clearTimeout(delayFocus);
  }, []);

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkInput]}>
      <StatusBar backgroundColor="#FFA500" barStyle="light-content" />
      <Icon
        onPress={onClose}
        name="arrow-back"
        size={30}
        style={styles.backIcon}
      />
      <TextInput
        ref={inputRef}
        enterKeyHint={'search'}
        style={[styles.input, isDarkMode && styles.darkText]}
        placeholder="Search..."
        placeholderTextColor={isDarkMode ? "#fff" : "#000"}
        value={searchText}
        returnKeyType={'search'}
        selectionColor="#FFA500"
        onChangeText={(text) => {
          handleInputChange(text);
          setSearchText(text);
        }}
        onSubmitEditing={() => {
          if (filteredData.length > 0) {
            handlePlaceSelect(filteredData[0]);
          } else {
            onClose();
          }
        }}
      />
      {searchText !== "" && (
        <TouchableOpacity
          style={styles.clearButtonContainer}
          onPress={clearSearch}
        >
          <IconAnt
            name="close"
            size={20}
            color={isDarkMode ? "#fff" : "#333"}
          />
        </TouchableOpacity>
      )}

      {(filteredData.length > 0 && searchText !== "") && (
        <FlatList
          data={filteredData}
          renderItem={renderAutocompleteItem}
          keyExtractor={(item) => item.name}
          style={styles.autocompleteList}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: "3%",
    margin: 1,
    elevation: 5,
    position: "absolute",
    top: 0,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    color: "#333",
  },
  autocompleteList: {
    marginLeft: 1,
    position: "absolute",
    top: 80,
    width: Dimensions.get("window").width - 35,
  },
  suggestionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  suggestionText: {
    fontSize: 15,
    marginLeft: 10,
    color: "#000",
  },
  darkText: {
    color: "#fff",
  },
  darkInput: {
    backgroundColor: "#808080",
  },
});

export default SearchBar;
