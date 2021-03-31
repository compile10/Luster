import {StyleSheet} from 'react-native';

const cardStyle = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginLeft: 10,
    height: 130,
    width: 180,
    paddingLeft: 20,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 15,
  },
  text: {
    paddingHorizontal: 12,
    height: 180,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowRadius: 20,
    textShadowOffset: {width: -1, height: 1},
  },
  miles: {
    fontSize: 10,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowRadius: 20,
    textShadowOffset: {width: -1, height: 1},
  },
});

export default cardStyle;
