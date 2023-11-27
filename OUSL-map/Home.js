import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
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

      <View style={{ bottom: 0, position: 'absolute', marginBottom: 120, marginLeft: 18 }}>
        <Text style={{ fontWeight: 500, fontSize: 14, color: isDarkMode ? '#FFFFFF' : '#000000' }}>UNIMATES</Text>
        <Text style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>&copy; 2023</Text>
      </View>

      <BottomToolbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
