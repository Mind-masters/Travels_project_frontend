
import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: true,
  isUserModalActive: false,
  authenticatedUser: {},
  login: () => {},
  logout: () => {},
  update: () => {},
  changeUserModalStatus: () => {},
});