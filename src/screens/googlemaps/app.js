import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Button, Dimensions, Text} from 'react-native';
import MapView, {Marker, Polygon} from 'react-native-maps';
import axios from 'axios';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

import {apiKey} from './config';

const mockMarkers = [
  {coordinate: {latitude: 32.076626, longitude: 34.80533}, key: 0},
  {coordinate: {latitude: 32.077626, longitude: 34.80633}, key: 1},
];

const mockPolygons = [
  [
    {latitude: 32.075838, longitude: 34.804511},
    {latitude: 32.075334, longitude: 34.804545},
    {latitude: 32.075458, longitude: 34.802999},
    {latitude: 32.075932, longitude: 34.803066},
  ],
  [
    {latitude: 32.078197, longitude: 34.804276},
    {latitude: 32.079445, longitude: 34.803923},
    {latitude: 32.079383, longitude: 34.805268},
  ],
];

const {width, height} = Dimensions.get('window');

const MinimalMap = () => {
  const [markers, setMarkers] = useState([]); 
  const [polygons, setPolygons] = useState([]);
  const [currentPolygon, setCurrentPolygon] = useState([]); 
  const [mode, setMode] = useState('marker'); 
  const [weather, setWeather] = useState(null); 

  const navigation = useNavigation(); // Navigation hook

  useFocusEffect(
    React.useCallback(() => {
      // Reset markers and polygons to mock data when the screen is focused
      setMarkers(mockMarkers);
      setPolygons(mockPolygons);
      setCurrentPolygon([]);
    }, []),
  );

  // Fetch weather data function
  const fetchWeather = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`,
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Press event
  const handlePress = event => {
    const {coordinate} = event.nativeEvent;
    console.log('Marker press detected:', coordinate);

    if (mode === 'marker') {
      const newMarker = {
        coordinate,
        key: markers.length,
      };
      setMarkers([...markers, newMarker]);
    } else if (mode === 'polygon') {
      const newPolygon = [...currentPolygon, coordinate];
      if (newPolygon.length === 5) {
        setPolygons([...polygons, currentPolygon]);
        setCurrentPolygon([coordinate]);
      } else {
        setCurrentPolygon(newPolygon);
      }
    }

    // Fetch weather data for the selected coordinate
    fetchWeather(coordinate.latitude, coordinate.longitude);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Marker Mode"
          onPress={() => setMode('marker')}
          color={mode === 'marker' ? 'blue' : 'gray'}
        />
        <Button
          title="Polygon Mode"
          onPress={() => setMode('polygon')}
          color={mode === 'polygon' ? 'blue' : 'gray'}
        />
        <Button
          title="Settings"
          onPress={() => navigation.navigate('Settings')} // Navigate to Settings screen
        />
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 32.076626,
          longitude: 34.80533,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        onPress={handlePress}>
        {markers.map(marker => (
          <Marker key={marker.key} coordinate={marker.coordinate} />
        ))}

        {polygons.map((polygon, index) => (
          <Polygon
            key={index}
            coordinates={polygon}
            strokeColor="#000"
            fillColor="rgba(255,0,0,0.3)"
            strokeWidth={2}
          />
        ))}

        {currentPolygon.length > 1 && (
          <Polygon
            coordinates={currentPolygon}
            strokeColor="#000"
            fillColor="rgba(255,0,0,0.3)"
            strokeWidth={2}
          />
        )}
      </MapView>
      {weather && (
        <View style={styles.weatherContainer}>
          <Text>Temperature: {weather.main.temp}°C</Text>
          <Text>Weather: {weather.weather[0].description}</Text>
          <Text>Location: {weather.name}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    position: 'absolute',
    top: height * 0.05,
    left: width * 0.05,
    right: width * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderRadius: 10,
    zIndex: 1,
  },
  weatherContainer: {
    position: 'absolute',
    bottom: height * 0.05,
    left: width * 0.05,
    right: width * 0.05,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 10,
    borderRadius: 10,
  },
});

export default MinimalMap;
