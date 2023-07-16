import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginTop: 20,
  },
  chart: {
    height: 160,
    width: Dimensions.get('window').width,
    marginTop: 10,
  },
  breakdownTitle: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
});
