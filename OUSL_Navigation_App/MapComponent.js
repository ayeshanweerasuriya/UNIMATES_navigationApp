// MapComponent.js
import React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';

const MapComponent = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      maximumZoomScale={3}
      minimumZoomScale={1}
      horizontal={true}
    >
    <ScrollView vertical={true}>
      <Image
        source={require('./assets/map.jpeg')}
        style={styles.mapImage}
        resizeMode="contain"
      />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: {
    width: 1800, // adjust the width of the image as needed
    height: 1200, // adjust the height of the image as needed
  },
});

export default MapComponent;
