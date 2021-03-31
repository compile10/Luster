export const tileStyle = StyleSheet.create({
  container: {
    height: 340,
    backgroundColor: 'white',
  },
  image: {
    overflow: 'hidden',
    height: 200,
    marginBottom: 15,
  },
  afterImage: {
    paddingHorizontal: 12,
    height: 180,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
  },
  skatspotContainer: {
    flexDirection: 'row',
  },
  skatespotTextSpacer: { // lines up text with icon
    marginTop: 4,
    marginLeft: 2,
  },
  skatespotText: {
    fontSize: 11,
    textAlign: 'center',
  },
  desc: {
    color: '#757575',
    fontSize: 13,
  },
  seperator: {
    borderWidth: 0.4,
    borderColor: '#E0E0E0',
    marginBottom: 10,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 17,
  },
  bottomrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    borderRadius: 50,
    width: 30,
    height: 30,
    marginRight: 6,
  },
  username: {
    fontSize: 10,
    textAlignVertical: 'center',
  },
  leftContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: 100,
    alignContent: 'center',
  },

  rightContainer: {
    marginRight: 1,
    marginTop: 5,
  },
  righttext: {
    textAlign: 'right',
    color: '#757575',
  },
});
