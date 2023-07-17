import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    maxWidth: Dimensions.get('window').width * 0.55,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 80,
  },
  texts: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  icon: {
    height: 30,
    maxWidth: '40%',
  },
  text: {
    marginVertical: 5,
  },
  readMore: {
    marginVertical: 5,
    textDecorationLine: 'underline',
  },
  separator: {
    width: 10,
  },
});
