import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    paddingHorizontal: 25,
    flex: 1,
  },
  screenContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    marginTop: 40,
  },
  noAccount: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  noAccountLink: {
    textDecorationLine: 'underline',
  },
});
