import {StyleSheet} from 'react-native';

const mapStyle = StyleSheet.create({
  geolocationButtonPos: {
    position: 'absolute',
    top: 50,
    right: 10,
  },
  geolocationButton: {
    borderRadius: 4,
    padding: 9,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  geolocationIcon: {
    fontSize: 23,
    color: 'tomato',
  },
  addSpotButtonPos: {
    position: 'absolute',
    top: 110,
    right: 10,
  },
  addSpotButton: {
    borderRadius: 4,
    padding: 9,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

export default mapStyle;
