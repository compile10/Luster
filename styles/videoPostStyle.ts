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
    display: 'flex',
    flexDirection: 'row',
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
});

export default videoPostStyle;
