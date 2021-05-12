/**
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {ApolloClient, ApolloProvider} from '@apollo/client';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {withNavigationProvider} from 'react-native-navigation-hooks';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import Geolocation from 'react-native-geolocation-service';

import {geolocationCache, cache} from './localCache';
import Feed from './screens/Feed';
import Map from './screens/Map';
import Login from './screens/Login';

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
        <SafeAreaProvider>
          <ApolloProvider client={client}>
            <WappedComponent {...this.props} />
          </ApolloProvider>
        </SafeAreaProvider>
      );
    }
  }
  WrappedComp.options = WappedComponent.options;
  return gestureHandlerRootHOC(withNavigationProvider(WrappedComp));
};
Navigation.registerComponent('Login', () => providerWrapper(Login));
Navigation.registerComponent('Feed', () => providerWrapper(Feed));
Navigation.registerComponent('Map', () => providerWrapper(Map));


const loginRoot = {
  root: {
    component: {
      name: 'Login'
    }
  }
};

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

Navigation.setRoot(loginRoot);
});
