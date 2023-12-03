import React from 'react';
import { SafeAreaView, View, Text, StatusBar, StyleSheet } from 'react-native';
import MapComponent from './MapComponent';
import BottomToolbar from './BottomToolbar';
import { useTheme } from './ThemeContext';

const Home = ({ route, navigation }) => {
  const { isDarkMode } = useTheme();
  const selectedPlace = route.params?.selectedPlace;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      {selectedPlace ? (
        // Render MapComponent with the selected place if available
        <MapComponent selectedPlace={selectedPlace} />
      ) : (
        // Render the default MapComponent without a selected place
        <MapComponent />
      )}

      <View style={styles.container}>
        <Text style={[styles.lightText, isDarkMode && styles.darkText]}>UNIMATES</Text>
        <Text style={isDarkMode && styles.darkText}>&copy; 2023</Text>
      </View>

      <BottomToolbar navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
 	bottom: 0, 
 	position: 'absolute', 
 	marginBottom: "20%", 
 	marginLeft: 18
  },
  lightText: {
  	color: '#333',
  	fontWeight: 500, 
  	fontSize: 14, 
  },
  darkText: {
    color: '#fff',
  },
});

export default Home;
