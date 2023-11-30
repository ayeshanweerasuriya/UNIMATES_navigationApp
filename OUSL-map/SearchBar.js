// SearchBar.js

import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { placesArray } from './data';

const SearchBar = ({ onClose, navigation }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedPlace, setSearchedPlace] = useState(null);

  const handleInputChange = (text) => {
    const filtered = placesArray.filter((place) =>
      place.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
    setQuery(text);
  };

  const handlePlaceSelect = (place) => {
    setSearchedPlace(place);
    navigation.navigate('Home', { selectedPlace: place });
    onClose();
  };

  const renderAutocompleteItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePlaceSelect(item)}>
      <View style={styles.suggestionItem}>
        <IconAnt name="search1" size={18} color="#333" />
        <Text style={styles.suggestionText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor="#FFA500" barStyle="light-content" />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchText}
        onChangeText={(text) => {
          handleInputChange(text);
          setSearchText(text);
        }}
        // Add any additional props or styles for your TextInput
      />
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <IconAnt name="close" size={20} color="#000" />
      </TouchableOpacity>

      {filteredData.length > 0 && (
        <FlatList
          data={filteredData}
          renderItem={renderAutocompleteItem}
          keyExtractor={(item) => item.name}
          style={styles.autocompleteList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 1,
    elevation: 5,
    position: 'absolute',
    top: 0,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#333',
  },
  autocompleteList: {
    marginLeft: 1,
    position: 'absolute',
    top: 80,
    width: Dimensions.get('window').width - 38,
    maxHeight: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  suggestionText: {
    fontSize: 15,
    marginLeft: 10,
    color: '#333',
  },
});

export default SearchBar;

