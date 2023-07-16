import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 2,
    minWidth: 150,
    maxWidth: 150,
  },
  chart: {
    height: 60,
    width: 80,
    marginTop: 10,
  },
  texts: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    overflow: 'hidden',
  },
  trendIcon: {
    marginLeft: 5,
    marginRight: 2,
  },
});
