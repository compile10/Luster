import {StyleSheet} from 'react-native';

const videoPostStyle = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  buttons: {
    marginTop: 'auto',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImage: {
    borderRadius: 50,
    width: 30,
    height: 30,
    borderColor: 'white',
    borderWidth: 1,
  },
  usernameText: {
    color: 'white',
    fontSize: 10,
  },

  username: {
    marginLeft: 3,
    width: 80,
  },
  iconRow: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 20,
    color: 'white',
    fontSize: 35,
    marginBottom: 2,
  },
  topText: {
    display: 'flex',
    marginTop: 60,
    marginLeft: 10,
  },
  titleText: {
    color: 'white',
    fontSize: 35,
  },
  location: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: 'white',
    fontSize: 20,
  },
  locationIcon: {
    color: 'tomato',
    marginRight: 3,
    fontSize: 22,
  },
});

export default videoPostStyle;
