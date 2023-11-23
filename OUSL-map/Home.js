import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import MapComponent from './MapComponent';
import BottomToolbar from './BottomToolbar';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style='auto' />
      <MapComponent />
      <View style={{ bottom: 0, position: 'absolute', marginBottom: 120, marginLeft: 18}}>
        <Text style={{fontWeight: 500, fontSize: 14 }}>UNIMATES</Text>
        <Text>&copy; 2023</Text>
      </View>
      <BottomToolbar navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;