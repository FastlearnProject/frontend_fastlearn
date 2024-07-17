import {
  faSchool,
  faSearch,
  faCubes,
  faNoteSticky,
  faGear,
  faCalendar,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { jwtDecode } from "jwt-decode";


/**
 * Función para obtener los enlaces de la barra lateral según el rol del usuario.
 * @param {string} token - El token JWT del usuario.
 * @returns {Array} - Lista de enlaces de la barra lateral.
 */
export const getSidebarLinks = (token) => {
  if (!token) {
    return [];
  }

  try {
    const decodedToken = jwtDecode(token);
    const role = decodedToken.rol;

    if (role === "student") {
      return [
        { text: "Dashboard", href: "/student", icon: faSchool },
        { text: "Buscar", href: "/search", icon: faSearch },
        { text: "Ajustes", href: "/settings", icon: faGear },
      ];
    } else if (role === "teacher") {
      return [
        { text: "Dashboard", href: "/teacher", icon: faSchool },
        { text: "Buscar", href: "/search", icon: faSearch },
        { text: "Mis temas", href: "/my-themes", icon: faSchool },
        { text: "Crear articulo", href: "/create-article", icon: faCalendar },
        { text: "Crear tema", href: "/create-theme", icon: faUserPlus },
        { text: "Ajustes", href: "/settings", icon: faGear },
      ];
    }else if (role === "admin") {
      return [
        { text: "Dashboard", href: "/admin", icon: faSchool },
        { text: "Buscar", href: "/search", icon: faSearch },
        { text: "Ajustes", href: "/settings", icon: faGear },
      ];
    }
  } catch (error) {
    console.error("Error al decodificar el token:", error);
    return [];
  }

  return [];
};

export default getSidebarLinks;
