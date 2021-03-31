/**
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {ApolloClient, ApolloProvider} from '@apollo/client';
import {withNavigationProvider} from 'react-native-navigation-hooks';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import Geolocation from 'react-native-geolocation-service';

import {geolocationCache, cache} from './localCache';
import Feed from './screens/Feed';
import Map from './screens/Map';
import Icon from './components/Icon';

import {navigationRoot} from './navigation';
const uri =
  Platform.OS === 'ios'
    ? 'http://192.168.1.112:3000/api'
    : 'http://10.0.2.2:3000/api';
const client = new ApolloClient({
  uri,
  cache,
});

//wraps each screen with providers for libraries
const providerWrapper = WappedComponent => {
  class WrappedComp extends React.Component {
    render() {
      return (
        <ApolloProvider client={client}>
          <WappedComponent {...this.props} />
        </ApolloProvider>
      );
    }
  }
  WrappedComp.options = WappedComponent.options;
  return gestureHandlerRootHOC(withNavigationProvider(WrappedComp));
};

Navigation.registerComponent('Feed', () => providerWrapper(Feed));
Navigation.registerComponent('Map', () => providerWrapper(Map));

Navigation.events().registerAppLaunchedListener(() => {
  Geolocation.getCurrentPosition(position => {
    geolocationCache({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  });
  Geolocation.watchPosition(position => {
    geolocationCache({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  });

  Promise.all([
    Icon.getImageSource('Material Icons', 59530, 30, 'black'),
    Icon.getImageSource('Material Icons', 58715, 30, 'black'),
  ]).then(icons => Navigation.setRoot(navigationRoot(icons)));
});
