import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleIcon: {
    marginRight: 5,
  },
  header: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  endContainer: { alignItems: 'flex-end' },
  buttons: {
    flexDirection: 'row',
    columnGap: 10,
    flex: 1,
    marginVertical: 10,
  },
  smallButton: {
    flex: 1,
    paddingVertical: 15,
  },
  sellButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
  },
  disclaimer: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
  },
});
