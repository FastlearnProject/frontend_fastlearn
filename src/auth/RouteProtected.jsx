import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// Componente de ruta protegida
const RouteProtected = () => {
  // Hook para redirigir al usuario
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener el token del almacenamiento local
    const token = localStorage.getItem("token");
    if (token) {
      try {
        // Decodificar el token para obtener los datos del usuario
        const decodedToken = jwtDecode(token);
        const role = decodedToken.rol;

        // Definir la ruta de destino según el rol del usuario
        let targetPath;
        if (role === "student") {
          targetPath = "/student";
        } else if (role === "teacher") {
          targetPath = "/teacher";
        } else if (role === "admin") {
          targetPath = "/admin";
        }

        // Navegar a la ruta de destino si no coincide con la ruta actual
        if (targetPath && window.location.pathname !== targetPath) {
          navigate(targetPath);
        }

      } catch (error) {
        // Manejo de errores si la decodificación del token falla
        console.error("Error al decodificar el token:", error);
        navigate("/login");
      }
    } else {
      // Redirigir al usuario a la página de login si no hay token
      navigate("/login");
    }
  }, [navigate]);

  // Renderizar Outlet para permitir que las rutas hijas se rendericen dentro de esta ruta protegida
  return <Outlet />;
};

export default RouteProtected;
