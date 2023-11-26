import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StatusBar } from 'react-native';
import MapComponent from './MapComponent';
import BottomToolbar from './BottomToolbar';
import { useTheme } from "./ThemeContext";

const Home = ({ navigation }) => {
  const { isDarkMode } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#333' : '#fff'} // Change background color as needed
      />
      <MapComponent />
      <View style={{ bottom: 0, position: 'absolute', marginBottom: 120, marginLeft: 18 }}>
        <Text style={{ fontWeight: 500, fontSize: 14, color: isDarkMode ? '#FFFFFF' : '#000000' }}>UNIMATES</Text>
        <Text style={{ color: isDarkMode ? '#FFFFFF' : '#000000' }}>&copy; 2023</Text>
      </View>
      <BottomToolbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;