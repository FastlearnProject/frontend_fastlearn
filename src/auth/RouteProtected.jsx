import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// Rutas protegidas

const RouteProtected = () => {
  const navigate = useNavigate();

  // Obtener el token de localstorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        // Decodificar token para extraer el rol
        const decodedToken = jwtDecode(token);
        const role = decodedToken.rol;

        // Redirigir según sea el rol

        let targetPath;
        if (role === "student") {
          targetPath = "/student";
        } else if (role === "teacher") {
          targetPath = "/teacher";
        } else if (role === "admin") {
          targetPath = "/admin";
        }
        if (targetPath && window.location.pathname !== targetPath) {
          navigate(targetPath);
        }
        
      } catch (error) {
        // Manejo de errores para el token si no decodifica

        console.error("Error al decodificar el token:", error);
        navigate("/login");
      }
    } else {
      // Si no hay token redirigir a login
      navigate("/login");
    }
  }, [navigate]);

  return <Outlet />; // Outlet renderiza los hijos de la ruta protegida
};

export default RouteProtected;
