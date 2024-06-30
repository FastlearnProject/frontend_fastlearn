import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const RouteProtected = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const role = decodedToken.rol;
        if (role === "student" && window.location.pathname !== "/student") {
          navigate("/student");
        } else if (
          role === "teacher" &&
          window.location.pathname !== "/teacher"
        ) {
          navigate("/teacher");
        } else if (role === "admin" && window.location.pathname !== "/admin") {
          navigate("/admin");
        }
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return <Outlet />; // Outlet renderiza los hijos de la ruta protegida
};

export default RouteProtected;
