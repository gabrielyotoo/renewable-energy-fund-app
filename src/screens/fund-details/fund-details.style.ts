import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  chart: {
    height: 200,
    width: Dimensions.get('window').width,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginTop: 20,
  },
  infoTitle: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
  columns: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    columnGap: 40,
  },
  data: {
    marginVertical: 5,
    rowGap: 5,
  },
});
