import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const MapComponent = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 6.883,
          longitude: 79.8868,
          latitudeDelta: 0.000922,
          longitudeDelta: 0.000421,
        }}
        provider="google"
      >
        <Marker
          coordinate={{ latitude: 6.883, longitude: 79.8868 }}
          title="Marker Title"
          description="Marker Description"
          pinColor='orange'
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapComponent;
