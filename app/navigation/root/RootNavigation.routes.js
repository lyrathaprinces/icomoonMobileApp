// @flow
import {PrimaryTabNavigation} from './../primaryTab/';
import HomeDetailScreen from '../../modules/home/screens/homeDetail/HomeDetailScreen';
import UploadVideoScreen from '../../modules/home/screens/uploadVideo/uploadVideoScreen';

export const ROOT_NAV_ROOT = 'Root';
export const ROOT_NAV_HOME_DETAIL = 'Home detail';
export const ROOT_NAV_UPLOAD_VIDEO = 'Upload Video';

export const ROUTES = {
  [ROOT_NAV_ROOT]: {
    screen: PrimaryTabNavigation,
    path: `/${ROOT_NAV_ROOT}`,
  },
  [ROOT_NAV_HOME_DETAIL]: {
    screen: HomeDetailScreen,
    path: `/${ROOT_NAV_HOME_DETAIL}`,
  },
  [ROOT_NAV_UPLOAD_VIDEO]: {
    screen: UploadVideoScreen,
    path: `/${ROOT_NAV_UPLOAD_VIDEO}`,
  },
};
