import React, {useState, useRef} from 'react';
import {Text, FlatList, StyleSheet, View} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';

import {useReactiveVar, gql, useQuery} from '@apollo/client';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

import MapView, {Marker} from 'react-native-maps';
import {coordinates, getDistance} from '../utils';
import {geolocationCache} from '../localCache';
import Card from '../components/Card';
import Icon from '../components/Icon';
import SpotCard from '../components/SpotCard';

import mapStyle from '../styles/mapStyle';

const LATITUDE_DELTA = 0.05;
const LONGITUDE_DELTA = 0.05;

interface SpotList {
  name: string;
  spotID: number;
  image: string;
  miles: number;
  cordinates: coordinates;
}

const GET_SPOTLISTS = gql`
  query getSpotList {
    spotList {
      name
      spotID
      desc
      cordinates {
        latitude
        longitude
      }
      image
      likes
      hostile
    }
  }
`;

const Map = () => {
  const listOffset = useSharedValue(0);
  const spotCardOffset = useSharedValue(0);

  // this ref is used to call animateToRegion when we need to move the map to cords
  const mapRef = useRef<MapView>(null);
  const markerRef = useRef<Marker>(null);
  const [spotCardData, setSpotCardData] = useState({
    title: '',
    image: '',
    desc: '',
    spotID: 0,
    likes: 0,
    hostile: false,
    set: false,
  });
  const [marginBottom, setmarginBottom] = useState(1); // fixes a stupid glitch in react-native-maps
  const geoloc = useReactiveVar(geolocationCache);
  // makes the row of spots leave when clicking on a spot
  const spotHorizontalLeaveAni = useAnimatedStyle(() => ({
    transform: [{translateY: listOffset.value}],
  }));

  // allows the spotcard to enter when a spot is clicked
  const spotCardEnterAni = useAnimatedStyle(() => ({
    transform: [{translateY: -spotCardOffset.value}],
  }));

  const {loading, error, data} = useQuery(GET_SPOTLISTS);

  if (loading) {
    return (
      <>
        <Text>Loading...</Text>
      </>
    );
  }
  if (error) {
    return <Text>Error!</Text>;
  }

  const markerRefs: any = [];
  data.spotList.map((spot: any) => {
    markerRefs[spot.spotID] = {...markerRef};
    return null;
  });

  if (geoloc.latitude === 200 && geoloc.longitude === 200) {
    return (
      <>
        <Text>Loading Loc</Text>
      </>
    );
  }

  const currentPosition = {
    latitude: geoloc.latitude,
    longitude: geoloc.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  const onPressExit = () => {
    listOffset.value = withSpring(0, {damping: 20, stiffness: 95});
    spotCardOffset.value = withSpring(0);
    markerRefs[spotCardData.spotID].current.hideCallout();
  };

  const onPressCard = (spot: any) => {
    setSpotCardData({
      title: spot.name,
      image: spot.image,
      spotID: spot.spotID,
      desc: spot.desc,
      likes: spot.likes,
      hostile: spot.hostile,
      set: true,
    });
    listOffset.value = withSpring(200);
    spotCardOffset.value = withSpring(450, {damping: 20, stiffness: 95});
  };

  const renderItem = ({item}: {item: SpotList}) => (
    <RectButton
      underlayColor="transparent"
      rippleColor="transparent"
      onPress={() => onPressCard(item)}>
      <Card
        title={item.name}
        image={item.image}
        miles={
          Math.round(
            getDistance(
              {
                latitude: geoloc.latitude,
                longitude: geoloc.longitude,
              },
              item.cordinates,
            ) * 10,
          ) / 10
        }
      />
    </RectButton>
  );

  const mapReady = () => {
    setmarginBottom(0);
    if (mapRef && mapRef.current) {
      mapRef.current.animateToRegion(currentPosition, 1);
    }
  };

  const onPressGeoButton = () => {
    if (mapRef && mapRef.current) {
      mapRef.current.animateToRegion(currentPosition, 700);
    }
  };
  return (
    <>
      <MapView
        ref={mapRef}
        showsMyLocationButton={false}
        style={{...StyleSheet.absoluteFillObject, marginBottom}}
        showsUserLocation
        initialRegion={currentPosition}
        onMapReady={() => mapReady()}>
        {data.spotList.map((spot: any) => (
          <Marker
            ref={markerRefs[spot.spotID]}
            title={spot.name}
            coordinate={spot.cordinates}
            key={spot.spotID}
            onPress={() => onPressCard(spot)}
          />
        ))}
      </MapView>
      <Animated.View
        style={[
          {
            position: 'absolute',
            bottom: 50,
          },
          spotHorizontalLeaveAni,
        ]}>
        <FlatList
          contentContainerStyle={{marginRight: 40}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data.spotList}
          renderItem={renderItem}
          keyExtractor={item => item.spotID.toString()}
        />
      </Animated.View>
      <View style={mapStyle.geolocationButtonPos}>
        <RectButton
          underlayColor="transparent"
          rippleColor="transparent"
          onPress={onPressGeoButton}>
          <View accessible style={mapStyle.geolocationButton}>
            <Icon set="Ionicons" id={62488} style={mapStyle.geolocationIcon} />
          </View>
        </RectButton>
      </View>
      <View style={mapStyle.addSpotButtonPos}>
        <RectButton
          underlayColor="transparent"
          rippleColor="transparent"
          onPress={onPressGeoButton}>
          <View accessible style={mapStyle.addSpotButton}>
            <Icon
              set="Material Icons"
              id={61242}
              style={mapStyle.geolocationIcon}
            />
          </View>
        </RectButton>
      </View>
      <Animated.View
        style={[
          {
            position: 'absolute',
            bottom: -410,
            left: 30,
          },
          spotCardEnterAni,
        ]}>
        {spotCardData.set && ( // only renders when a spot is first clicked
          <SpotCard
            title={spotCardData.title}
            image={spotCardData.image}
            desc={spotCardData.desc}
            likes={spotCardData.likes}
            hostile={spotCardData.hostile}
            onPressExit={onPressExit}
          />
        )}
      </Animated.View>
    </>
  );
};

Map.options = {
  statusBar: {
    style: 'dark',
    drawBehind: true,
    backgroundColor: 'transparent',
  },
  topBar: {
    visible: 'false',
  },
};

export default Map;
