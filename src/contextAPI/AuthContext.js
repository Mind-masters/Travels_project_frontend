
import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  isUserModalActive: false,
  authenticatedUser: null,
  login: () => {},
  logout: () => {},
  update: () => {},
  changeUserModalStatus: () => {},
});