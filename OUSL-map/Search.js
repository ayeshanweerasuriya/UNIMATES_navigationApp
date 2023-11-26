import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { placesArray } from './data';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState('');

  const clearSearch = () => {
    setSearchText('');
  };

  const handleInputChange = (text) => {
    const filtered = placesArray.filter((place) =>
      place.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
    setQuery(text);
  };

  const handlePlaceSelect = (place) => {
    navigation.navigate('MapScreen', { place });
  };

  const renderAutocompleteItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePlaceSelect(item)}>
      <Text style={styles.autocompleteItem}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar backgroundColor="#FFA500" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <Icon name="search-sharp" size={20} color="grey" style={{ marginRight: 10 }} />
          <TextInput
            placeholder="Search..."
            placeholderTextColor="grey"
            value={searchText}
            onChangeText={(text) => {
              handleInputChange(text);
              setSearchText(text);
            }}
            style={{ width: 200 }}
          />
          {searchText !== '' && (
            <TouchableOpacity style={styles.clearButtonContainer} onPress={clearSearch}>
              <Icon name="close" size={20} color="red" />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate("Home")} >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      {filteredData.length > 0 && (
        <FlatList
          data={filteredData}
          renderItem={renderAutocompleteItem}
          keyExtractor={(item) => item.name}
          style={styles.autocompleteList}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFA500',
    padding: 16,
    paddingTop: 40,
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 8,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  clearButtonContainer: {
    position: 'absolute',
    right: 8,
  },
  cancelButton: {
    marginLeft: 10,
  },
  cancelButtonText: {
    color: '#191970',
    fontSize: 16,
  },
  autocompleteList: {
    maxHeight: 200,
  },
  autocompleteItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SearchBar;
