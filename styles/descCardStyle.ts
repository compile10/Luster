import { StyleSheet } from 'react-native';

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
    backgroundColor: 'white',
    borderRadius: 10,
    width: 350,
    height: 120,
  },
  exitWrapper: {
    flexDirection: 'row',
  },
  exitButton: {
    marginTop: 12,
    marginRight: 12,
  },
  exitIcon: {
    color: 'black',
    fontSize: 22,
  },
  descText: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  tagText: {
    paddingTop: 10,
    paddingLeft: 10,
    flexShrink: 1,
  },
});

export default spotCardStyle;
