//mapscreen.js
import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ route }) => {
  const { params } = route;
  const { place } = params || {};
  const { name, coordinates } = place || {};

  return (
    <View style={{ flex: 1 }}>
      <MapView
        userInterfaceStyle='dark'
        provider={MapView.PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        customMapStyle={mapCustomStyle}
        initialRegion={{
          latitude: coordinates[0],
          longitude: coordinates[1],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        minZoomLevel={18}
      >
        {coordinates && (
          <Marker
            coordinate={{
              latitude: coordinates[0],
              longitude: coordinates[1],
            }}
            title={name}
            pinColor="orange"
          />
        )}
      </MapView>
      {/* Additional components or information can be placed here */}
    </View>
  );
};

export default MapScreen;