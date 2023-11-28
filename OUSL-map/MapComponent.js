//mapcomponent.js
import React, { useRef, useState, useEffect } from 'react';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
// import CustomRoad from './CustomRoad';
import { useTheme } from "./ThemeContext";
import { placesArray } from './data';

const MapComponent = ({ selectedPlace }) => {

  const { isDarkMode } = useTheme();

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
          visibility: "off"
        }
      ]
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
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
  ];

  const customDarkMapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#1d2c4d"
        }
      ]
    },
    {
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8ec3b9"
        }
      ]
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1a3646"
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878"
        }
      ]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#64779e"
        }
      ]
    },
    {
      featureType: "administrative.neighborhood",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878"
        }
      ]
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#334e87"
        }
      ]
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#023e58"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#283d6a"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6f9ba5"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#023e58"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3C7680"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#304a7d"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#2c6675"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#255763"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#b0d5ce"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#023e58"
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be"
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d"
        }
      ]
    },
    {
      featureType: "transit.line",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#283d6a"
        }
      ]
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#3a4762"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#0e1626"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#4e6d70"
        }
      ]
    }
  ];

  const selectedMapStyle = isDarkMode ? customDarkMapStyle : customMapStyle;
  
  const initialRegion = selectedPlace
    ? {
      latitude: selectedPlace.coordinates[0],
      longitude: selectedPlace.coordinates[1],
      latitudeDelta: 0.005, // Adjust the zoom level as needed
      longitudeDelta: 0.005,
    }
    : {
      latitude: 6.883,
      longitude: 79.8868,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421,
    };
    
      const north = 6.88934;
  const east = 79.88693;
  const south = 6.88231;
  const west = 79.88059;

  const mapViewRef = useRef(null);

  const [region, setRegion] = useState({
    latitude: (north + south) / 2,
    longitude: (east + west) / 2,
    latitudeDelta: Math.abs(north - south) * 0.5,
    longitudeDelta: Math.abs(east - west) * 0.5,
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
      mapViewRef.current.animateToRegion(region, 500); // You can adjust the duration as needed
    } else {
      // If inside the boundaries, update the region state
      setRegion(newRegion);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          top: 0,
          position: "absolute",
          marginTop: 60,
          marginRight: 18,
          right: 0,
          borderRadius: 180,
          backgroundColor: "#FFF",
          shadowColor: "rgba(0, 0, 0, 0.25)",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.25,
          shadowRadius: 3,
          elevation: 3,
        }}
      >
        <View
          style={{
            width: 35,
            height: 35,
            flexShrink: 0,
            borderRadius: 180,
            backgroundColor: "#FFF",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name="navigation" size={24} color="#FF0000" />
        </View>
      </View>
      <MapView
        ref={mapViewRef}
        style={styles.map}
        region={initialRegion}
        provider={PROVIDER_GOOGLE}
        customMapStyle={selectedMapStyle}
        minZoomLevel={18}
        onRegionChangeComplete={onRegionChangeComplete}
        showsUserLocation
        followsUserLocation
      >
        {placesArray.map((place, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: place.coordinates[0],
              longitude: place.coordinates[1],
            }}
            title={place.name} // Display the name as the marker title
          // You can also use description={place.name} if you want a description
          >
            <View style={styles.markerContainer}>
              <Text style={[styles.markerText, isDarkMode && styles.darkText]}>{place.name}</Text>
            </View>
          </Marker>
        ))}
        {selectedPlace && (
          <Marker
            coordinate={{
              latitude: selectedPlace.coordinates[0],
              longitude: selectedPlace.coordinates[1],
            }}
            title={selectedPlace.name}
            pinColor="orange"
          />)}

      </MapView>

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
  markerText: {
    fontSize: 11,
    color: '#000'
  },
  darkText: {
    fontSize: 11,
    color: '#fff'
  },
});

export default MapComponent;
