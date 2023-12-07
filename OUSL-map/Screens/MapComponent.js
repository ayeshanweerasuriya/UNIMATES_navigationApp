import React, { useState, useRef, useCallback, useMemo } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, Text, Modal } from "react-native";
import { placesArray } from "./data";
import { useTheme } from "./ThemeContext";
import SelectedLocation from "./SelectedLocation";

const MapComponent = ({ selectedPlace }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const { isDarkMode } = useTheme();

  const handleMarkerPress = useCallback((marker) => {
    setSelectedMarker(marker);
    setModalVisible(true);
  }, []);
  
    const initialRegion = selectedPlace
    ? {
        latitude: selectedPlace.coordinates[0],
        longitude: selectedPlace.coordinates[1],
        latitudeDelta: 0.005, // Adjust the zoom level as needed
        longitudeDelta: 0.005,
      }
    : {
        latitude: 6.883421,
        longitude: 79.884448,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      };


  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const customMapStyle = useMemo(() => {
    return isDarkMode ? customDarkMapStyle : customMapStyle;
  }, [isDarkMode]);

const markersInRegion = useMemo(() => {
  return placesArray.filter(
    (place) =>
      place.coordinates[0] >= newRegion.latitude - newRegion.latitudeDelta / 2 &&
      place.coordinates[0] <= newRegion.latitude + newRegion.latitudeDelta / 2 &&
      place.coordinates[1] >= newRegion.longitude - newRegion.longitudeDelta / 2 &&
      place.coordinates[1] <= newRegion.longitude + newRegion.longitudeDelta / 2
  );
}, [newRegion]);


  const mappedMarkers = useMemo(() => {
    return markersInRegion.map((place, index) => (
      <Marker
        key={index}
        coordinate={{
          latitude: place.coordinates[0],
          longitude: place.coordinates[1],
        }}
        onPress={() => handleMarkerPress(place.name)}
      >
        <View style={styles.markerContainer}>
          <Text style={[styles.markerText, isDarkMode && styles.darkText]}>
            {place.name}
          </Text>
        </View>
      </Marker>
    ));
  }, [markersInRegion, handleMarkerPress, isDarkMode]);

  const selectedPlaceMarker =
    selectedPlace && (
      <Marker
        coordinate={{
          latitude: selectedPlace.coordinates[0] + 0.00001,
          longitude: selectedPlace.coordinates[1],
        }}
        title={selectedPlace.name}
        pinColor="orange"
      />
    );

  const onRegionChangeComplete = useCallback(
    (newRegion) => {
      if (
        newRegion.latitude < south ||
        newRegion.latitude > north ||
        newRegion.longitude < west ||
        newRegion.longitude > east
      ) {
        mapViewRef.current.animateToRegion(region, 10);
      } else {
        setRegion(newRegion);
        handleMarkers(newRegion);
      }
    },
    [region, handleMarkers]
  );

  const mapViewRef = useRef(null);

  const [region, setRegion] = useState({
    latitude: (north + south) / 2,
    longitude: (east + west) / 2,
    latitudeDelta: Math.abs(north - south) * 1.2,
    longitudeDelta: Math.abs(east - west) * 1.2,
  });

  const handleMarkers = useCallback((region) => {
    setVisibleMarkers(markersInRegion);
  }, [markersInRegion]);

  const [visibleMarkers, setVisibleMarkers] = useState([]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapViewRef}
        style={styles.map}
        region={initialRegion} // Use `region` instead of `initialRegion`
        provider={PROVIDER_GOOGLE}
        customMapStyle={customMapStyle}
        minZoomLevel={19}
        onRegionChangeComplete={onRegionChangeComplete}
      >
        {mappedMarkers}
        {selectedPlaceMarker}
      </MapView>

      <Modal
        animationIn="slideInUp"
        animationOut="slideOutDown"
        visible={isModalVisible}
        onRequestClose={closeModal}
        backdropOpacity={0.5}
      >
        <SelectedLocation
          selectedMarker={selectedMarker}
          closeModal={closeModal}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerContainer: {
    // Add styles for the marker container if needed
  },
  markerText: {
    fontSize: 11,
    color: "#000",
    width: 130,
    textAlign: "center",
  },
  darkText: {
    color: "#fff",
  },
});

export default MapComponent;

