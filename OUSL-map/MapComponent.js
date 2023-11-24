import React, { useState } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomRoad from './CustomRoad';

const MapComponent = () => {
  const customMapStyle = [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{ top: 0, position: 'absolute', marginTop: 60, marginRight: 18, right: 0, borderRadius: 180, backgroundColor: '#FFF', shadowColor: 'rgba(0, 0, 0, 0.25)', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.25, shadowRadius: 3, elevation: 3 }}>
        <View style={{ width: 35, height: 35, flexShrink: 0, borderRadius: 180, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="navigation" size={24} color="#FF0000" />
        </View>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 6.883,
          longitude: 79.8868,
          latitudeDelta: 0.000922,
          longitudeDelta: 0.000421,
        }}
        provider="google"
        customMapStyle={customMapStyle}
        minZoomLevel={18}
      >
        <Marker
          coordinate={{ latitude: 6.888954, longitude: 79.881006, }}
          pinColor='orange'
        >
          <View style={styles.markerContainer}>
            <Text style={styles.markerText}>Open University Bridge</Text>
          </View>
        </Marker>
      </MapView>
    </View >
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
