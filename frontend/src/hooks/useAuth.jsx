import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../api/client";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // 1. Initialize loading based on whether the token exists right now.
  // If there is no token, loading starts as false.
  const [loading, setLoading] = useState(() => {
    return !!localStorage.getItem("token");
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 2. We only need to run logic if the token actually exists
    if (token) {
      api
        .getCurrentUser()
        .then((res) => setUser(res.data))
        .catch(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
        })
        .finally(() => setLoading(false));
    }
  }, []);

  const login = async (email, password) => {
    const response = await api.login(email, password);
    localStorage.setItem("token", response.data.token); // adding token to local storage from fake db
    setUser(response.data.user);
    return response.data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setUser(null);
  };

  const register = async (userData) => {
    const response = await api.register(userData);
    localStorage.setItem("token", response.data.token);
    setUser(response.data.user);
    return response.data;
  };

  return (
    <AuthContext.Provider value={{ login, logout, register, loading, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used withing AuthProvider");
  }
  return context;
}

// here we are using context api, for better variables sharing
// its hard to read, but basically every component surrounded by
// auth provider will get acess to these variables in
// <AuthContext.Provider value={{ login, logout, register, loading, user }}>
