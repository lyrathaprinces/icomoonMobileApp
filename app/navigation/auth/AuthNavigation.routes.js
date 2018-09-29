// @flow
import LoginScreen from '../../modules/auth/screens/login/LoginScreen';
import RegistrationScreen from '../../modules/auth/screens/registration/RegistrationScreen';

export const AUTH_NAV_LOGIN = 'Login';
export const AUTH_NAV_REGISTER = 'Register';

export const ROUTES = {
  [AUTH_NAV_LOGIN]: {
    screen: LoginScreen,
    path: `/${AUTH_NAV_LOGIN}`,
  },
  [AUTH_NAV_REGISTER]: {
    screen: RegistrationScreen,
    path: `/${AUTH_NAV_REGISTER}`,
  },
};
