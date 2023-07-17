import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  chart: {
    height: 160,
    width: Dimensions.get('window').width,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginTop: 20,
  },
  dateRange: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
});
