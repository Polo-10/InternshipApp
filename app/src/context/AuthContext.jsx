import React from "react";
export const AuthContext = React.createContext();

export const useAuth = () => {
  return React.useContext(AuthContext);
};

const localStorageName = "InternshipLocalStorageName";

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(
    localStorage.getItem(localStorageName)
      ? JSON.parse(localStorage.getItem(localStorageName))
      : null
  );

  const handleSetUser = (value) => {
    if (value) {
      localStorage.setItem(localStorageName, JSON.stringify(value));
    } else {
      localStorage.removeItem(localStorageName);
    }
    setUser(value);
  };

  const value = { user, setUser: handleSetUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
