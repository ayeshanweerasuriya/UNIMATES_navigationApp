import React, { useState, useRef, useEffect, lazy } from "react";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE, Overlay, MAP_TYPES } from "react-native-maps";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Dimensions
} from "react-native";
// import CustomRoad from './CustomRoad';
import { placesArray } from "./data";
import { useTheme } from "./ThemeContext";
import SelectedLocation from "./SelectedLocation";


const MapComponent = ({ selectedPlace }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const { isDarkMode } = useTheme();

  // Function to handle marker press
  const handleMarkerPress = (marker) => {
    setSelectedMarker(marker);
    setModalVisible(true);
  };

  // Function to close the modal and hide the selected marker
  const closeModal = () => {
    setModalVisible(false);
    setSelectedMarker(null);
  };

  const customMapStyle = [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },

    {
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.business",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ];

  const customDarkMapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8ec3b9",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1a3646",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#64779e",
        },
      ],
    },
    {
      featureType: "administrative.neighborhood",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878",
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#334e87",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#283d6a",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6f9ba5",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3C7680",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#304a7d",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#2c6675",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#255763",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#b0d5ce",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#283d6a",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#3a4762",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#0e1626",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#4e6d70",
        },
      ],
    },
  ];

  const selectedMapStyle = isDarkMode ? customDarkMapStyle : customMapStyle;

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
    // Check if the new region is within the allowed boundaries
    if (
      newRegion.latitude < south ||
      newRegion.latitude > north ||
      newRegion.longitude < west ||
      newRegion.longitude > east
    ) {
      // If outside the boundaries, update the map to the last valid region
      mapViewRef.current.animateToRegion(region, 10);
    } else {
      // If inside the boundaries, update the region state and handle markers
      setRegion(newRegion);
      handleMarkers(newRegion);
    }
  };

  const [visibleMarkers, setVisibleMarkers] = useState([]);

  let shuffledMarkersCache = null;

  const handleMarkers = (region, lazy) => {
    const { longitudeDelta } = region;

    const zoomLevel = Math.log2(360 / longitudeDelta);

    const maxMarkersAtMaxZoom = 30;
    const minMarkersAtMinZoom = 5;

    if (zoomLevel >= 18) {
      setVisibleMarkers(placesArray);
      return;
    }

    if (zoomLevel <= 16.6) {
      // Use the cached shuffled array if available
      const shuffledMarkers = shuffledMarkersCache || shuffleArray(placesArray);

      // Cache the shuffled array to avoid unnecessary recalculation
      if (!shuffledMarkersCache) {
        shuffledMarkersCache = shuffledMarkers;
      }
      const markersToShow = shuffledMarkers.slice(0, minMarkersAtMinZoom);
      setVisibleMarkers(markersToShow);
    }
  };

  // Fisher-Yates shuffle function
  const shuffleArray = (array, lazy) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  //const imageSource = require('../assets/map.png');

  //const overlayBounds = [
  //[6.88238, 79.87886], // Bottom-left corner
  //[6.88916, 79.88756], // Top-right corner
  //];

  return (
    <View style={styles.container}>
      <MapView
        ref={mapViewRef}
        style={styles.map}
        region={initialRegion}
        provider={PROVIDER_GOOGLE}
        customMapStyle={selectedMapStyle}
        minZoomLevel={16}
        mapType={'standard'}
        onRegionChangeComplete={onRegionChangeComplete}
        mapPadding={{
          left: 20,
          bottom: 20
        }}
        paddingAdjustmentBehavior={'never'}
        showsIndoors={false}
        toolbarEnabled={false}
      // showsUserLocation
      >
        {visibleMarkers.map((place, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: place.coordinates[0],
              longitude: place.coordinates[1],
            }}
            onPress={() => handleMarkerPress(place.name)}
            tracksViewChanges={false}
          >
            <View style={styles.markerContainer}>
              <Text style={[styles.markerText, isDarkMode && styles.darkText]}>
                {place.name}
              </Text>
            </View>
          </Marker>
        ))}
        {selectedPlace && (
          <Marker
            coordinate={{
              latitude: selectedPlace.coordinates[0] + 0.00001,
              longitude: selectedPlace.coordinates[1],
            }}
            title={selectedPlace.name}
            pinColor="orange"
            tracksViewChanges={false}
          />
        )}
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
});

export default MapComponent;
