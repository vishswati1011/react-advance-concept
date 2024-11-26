import { createContext, useCallback, useState, useEffect, useMemo } from "react";

const initialState = {
  isAuthenticate: false,
  setToken: () => {},
};

const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState('');

  const setToken = useCallback((token) => {
    localStorage.setItem("token", token);
    setIsAuthenticate(true);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === 'logged-in') {
      setIsAuthenticate(true);
    }
  }, [isAuthenticate]);

  const value = useMemo(()=>({isAuthenticate,setToken}),[isAuthenticate,setToken])


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };