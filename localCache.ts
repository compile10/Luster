import {makeVar, InMemoryCache} from '@apollo/client';

export const cache = new InMemoryCache(); // apollo cache for remote data

export const geolocationCache = makeVar({
  latitude: 200,
  longitude: 200,
});

export const iconImageCache = makeVar(new Map());
export const iconImageErrorCache = makeVar(new Map());
