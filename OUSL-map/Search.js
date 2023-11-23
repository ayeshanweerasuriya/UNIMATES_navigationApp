import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Search = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const dataArray = ['Open University Bridge', 'Dormitory', 'Computer Labroatory', 'Exam Hall 01', 'Grape', 'Lemon', 'Orange', 'Peach', 'Pear', 'Plum'];

  const handleInputChange = (text) => {
    // Filter the data based on the input text
    const filtered = dataArray.filter(item => item.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(filtered);
    setQuery(text);
  };

  const renderAutocompleteItem = ({ item }) => (
    <Text style={styles.autocompleteItem}>{item}</Text>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.input, styles.boxShadow]}>
        <Icon name="search1" size={22} color="#000" style={{ marginRight: 15 }} />
        <TextInput
          style={{ fontSize: 17 }}
          placeholder="Type to search"
          value={query}
          onChangeText={handleInputChange}
        />
      </View>

      {/* Display autocomplete results using FlatList */}
      {filteredData.length > 0 && (
        <FlatList
          data={filteredData}
          renderItem={renderAutocompleteItem}
          keyExtractor={(item) => item}
          style={styles.autocompleteList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  input: {
    display: 'flex',
    height: 48,
    margin: 10,
    padding: 12,
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'flex-start'
  },
  autocompleteList: {
    maxHeight: 200,
  },
  autocompleteItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
}
);

export default Search;
