import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import MapComponent from './MapComponent';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapComponent />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

export default App;
