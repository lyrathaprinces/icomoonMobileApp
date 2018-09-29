// @flow
import HomeScreen from '../../modules/home/screens/HomeScreen';
import UpcomingScreen from '../../modules/upcoming/screens/UpcomingScreen';
import ProfileScreen from '../../modules/profile/screens/ProfileScreen';

export const HOME_TAB_NAV = 'Home';
export const UPCOMING_TAB_NAV = 'Upcoming';
export const PROFILE_TAB_NAV = 'Profile';

export const ROUTES = {
  [HOME_TAB_NAV]: {
    screen: HomeScreen,
    path: `/${HOME_TAB_NAV}`,
  },
  [UPCOMING_TAB_NAV]: {
    screen: UpcomingScreen,
    path: `/${UPCOMING_TAB_NAV}`,
  },
  [PROFILE_TAB_NAV]: {
    screen: ProfileScreen,
    path: `/${PROFILE_TAB_NAV}`,
  },
};
