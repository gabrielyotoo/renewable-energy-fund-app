import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  profile: {
    padding: 4,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  headerBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 20,
    zIndex: -1,
  },
  portfolio: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  trendingIcon: {
    marginLeft: 5,
    marginRight: 2,
  },
  earnRewards: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 5,
  },
  earnRewardsText: {
    marginLeft: 5,
  },
  separator: {
    height: 2,
  },
});
