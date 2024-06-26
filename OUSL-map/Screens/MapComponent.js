import React, { useState, useRef, useEffect } from "react";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE, Overlay, MAP_TYPES } from "react-native-maps";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
// import CustomRoad from './CustomRoad';
import { placesArray } from "./data";
import { useTheme } from "./ThemeContext";
import { customMapStyle, customDarkMapStyle } from './MapStyles';
import BottomSheet from './BottomSheet';
import satelliteImage from '../assets/satellite.jpg';
import standardImage from '../assets/standard.jpg';

const MapComponent = ({ selectedPlace }) => {
  const [selectedMarker, setSelectedMarker] = useState(selectedPlace);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [visibleMarkers, setVisibleMarkers] = useState([]);
  const [mapType, setMapType] = useState('standard');

  const { isDarkMode } = useTheme();

  const handleMarkerPress = (marker) => {
    setSelectedMarker(marker);
    setBottomSheetVisible(true);
  };

  const toggleMapType = () => {
    setMapType((prevMapType) => (prevMapType === 'standard' ? 'satellite' : 'standard'));
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
    setSelectedMarker(null);
  };

  useEffect(() => {
    setSelectedMarker(selectedPlace);
  }, [selectedPlace]);

  const initialRegion = selectedPlace
    ? {
      latitude: selectedPlace.coordinates[0],
      longitude: selectedPlace.coordinates[1],
      latitudeDelta: 0.000922,
      longitudeDelta: 0.000922,
    }
    : {
      latitude: 6.883421,
      longitude: 79.884448,
      latitudeDelta: 0.000922,
      longitudeDelta: 0.000922,
    };

  const north = 6.8933;
  const east = 79.8928;
  const south = 6.8764;
  const west = 79.8746;

  const mapViewRef = useRef(null);

  const [region, setRegion] = useState({
    latitude: (north + south) / 2,
    longitude: (east + west) / 2,
    latitudeDelta: Math.abs(north - south) * 1.2,
    longitudeDelta: Math.abs(east - west) * 1.2,
  });

  const onRegionChangeComplete = (newRegion) => {
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
  };

  let shuffledMarkersCache = null;

  const handleMarkers = (region) => {
    const { longitudeDelta } = region;
    const zoomLevel = Math.log2(360 / longitudeDelta);
    const minMarkersAtMinZoom = 5;

    if (zoomLevel >= 18) {
      setVisibleMarkers(placesArray);
      return;
    }
    else if (zoomLevel <= 16.5) {

      const shuffledMarkers = shuffledMarkersCache || shuffleArray(placesArray);

      if (!shuffledMarkersCache) {
        shuffledMarkersCache = shuffledMarkers;
      }

      const markersToShow = shuffledMarkers.slice(0, minMarkersAtMinZoom);
      setVisibleMarkers(markersToShow);
    }
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapViewRef}
        style={styles.map}
        region={initialRegion}
        provider={PROVIDER_GOOGLE}
        customMapStyle={isDarkMode ? customDarkMapStyle : customMapStyle}
        minZoomLevel={16}
        mapType={mapType}
        onRegionChangeComplete={onRegionChangeComplete}
        mapPadding={{
          top: 20,
          left: 8,
          bottom: 20,
        }}
        paddingAdjustmentBehavior={'never'}
        showsIndoors={false}
        toolbarEnabled={false}
      >
        {visibleMarkers.map((place, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: place.coordinates[0],
              longitude: place.coordinates[1],
            }}
            onPress={() => handleMarkerPress(place)}
            tracksViewChanges={false}
          >
            <View style={styles.markerContainer}>
              <Text style={[styles.markerText, isDarkMode && styles.darkText, mapType === 'satellite' && styles.satelliteText]}>
                {place.name}
              </Text>
            </View>
          </Marker>
        ))}
        {selectedMarker && (
          <Marker
            coordinate={{
              latitude: selectedMarker.coordinates[0] + 0.00001,
              longitude: selectedMarker.coordinates[1],
            }}
            pinColor="orange"
            tracksViewChanges={false}
          />
        )}

      </MapView>

      <View style={styles.mapTypeButton}>
        <TouchableOpacity onPress={toggleMapType}>
          <Image
            source={mapType === 'standard' ? satelliteImage : standardImage}
            style={styles.mapTypeButtonImage}
          />
        </TouchableOpacity>
      </View>

      {selectedMarker && (
        <BottomSheet
          selectedMarker={selectedMarker.name}
          isVisible={bottomSheetVisible}
          onClose={closeBottomSheet}
        />
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    minHeight: Dimensions.get('screen').height,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: "110%"
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
  mapTypeButton: {
    position: 'absolute',
    top: 35,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 4,
    elevation: 4,
  },
  mapTypeButtonImage: {
    width: 35,
    height: 35,
    borderRadius: 40,
  },
  satelliteText: {
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default MapComponent;
