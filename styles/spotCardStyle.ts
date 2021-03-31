import {StyleSheet} from 'react-native';

const spotCardStyle = StyleSheet.create({
  shadowContainer: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
  },
  container: {
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 10,
    width: 350,
    paddingBottom: 12,
  },
  image: {
    height: 120,
    marginBottom: 15,
  },
  textContainer: {
    paddingLeft: 10,
    paddingRight: 5,
  },
  text: {
    paddingHorizontal: 12,
    height: 180,
  },
  title: {
    fontSize: 20,
    marginBottom: 2,
  },
  likes: {
    fontSize: 14,
  },
  likeLine: {
    display: 'flex',
    flexDirection: 'row',
  },
  likeIcon: {
    paddingLeft: 5,
    fontSize: 17,
  },
  descBox: {
    marginTop: 2,
    height: 30,
  },
  desc: {
    fontSize: 10,
  },
  buttonRow: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mapButton: {
    marginRight: 7,
    borderRadius: 4,
    padding: 9,
    backgroundColor: '#90EE90',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  clipButton: {
    marginLeft: 7,
    borderRadius: 4,
    padding: 9,
    backgroundColor: '#FF5733',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  mapIcon: {
    marginRight: 3,
    fontSize: 15,
  },
  clipIcon: {
    marginRight: 4,
    fontSize: 15,
  },
  exitButton: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
  exitIcon: {
    color: 'white',
    fontSize: 22,
  },
  archWarning: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  archIcon: {
    color: '#ffcc00',
    fontSize: 20,
  },
  archWarningText: {
    color: '#ffcc00',
    fontSize: 10,
  },
});

export default spotCardStyle;
