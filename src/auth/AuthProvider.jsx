// AuthProvider.js
import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Crear contexto

const AuthContext = createContext();

// Crear proveedor de autenticación de token

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Crear token

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  // ELiminar token de local storage
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  // Crear objeto de contexto
  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthContext };
